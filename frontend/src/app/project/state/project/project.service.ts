import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arrayRemove, arrayUpsert, setLoading } from '@datorama/akita';
import { JComment } from '@trungk18/interface/comment';
import { JIssue } from '@trungk18/interface/issue';
import { JProject } from '@trungk18/interface/project';
import { DateUtil } from '@trungk18/project/utils/date';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProjectStore } from './project.store';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl: string;

  constructor(private http: HttpClient, private store: ProjectStore) {
    this.baseUrl = environment.apiUrl;
  }

  setLoading(isLoading: boolean) {
    this.store.setLoading(isLoading);
  }

  getProject() {
    this.http
      .get<JProject>(`${this.baseUrl}/project`)
      .pipe(
        setLoading(this.store),
        tap((project) => {
          this.store.update((state) => {
            return {
              ...state,
              ...project
            };
          });
        }),
        catchError((error) => {
          this.store.setError(error);
          return of(error);
        })
      )
      .subscribe();
  }

  updateProject(project: Partial<JProject>) {
    this.store.update((state) => ({
      ...state,
      ...project
    }));

    const newProject = this.store.getValue();

    this.http
      .post<JProject>(`${this.baseUrl}/project`, newProject)
      .pipe(
        catchError((err) => {
          this.store.setError(err);
          return of(err);
        })
      )
      .subscribe();
  }

  updateIssue(issue: JIssue) {
    issue.updatedAt = DateUtil.getNow();
    this.store.update((state) => {
      const issues = arrayUpsert(state.issues, issue.id, issue);
      return {
        ...state,
        issues
      };
    });
  }

  deleteIssue(issueId: string) {
    this.store.update((state) => {
      const issues = arrayRemove(state.issues, issueId);
      return {
        ...state,
        issues
      };
    });
  }

  updateIssueComment(issueId: string, comment: JComment) {
    const allIssues = this.store.getValue().issues;
    const issue = allIssues.find((x) => x.id === issueId);
    if (!issue) {
      return;
    }

    const comments = arrayUpsert(issue.comments ?? [], comment.id, comment);
    this.updateIssue({
      ...issue,
      comments
    });
  }
}
