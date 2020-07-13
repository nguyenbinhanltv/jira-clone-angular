import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssueType, JIssue, IssueStatus, IssuePriority } from '@trungk18/interface/issue';
import { quillConfiguration } from '@trungk18/project/config/editor';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ProjectService } from '@trungk18/project/state/project/project.service';
import { IssueUtil } from '@trungk18/project/utils/issue';
import { ProjectQuery } from '@trungk18/project/state/project/project.query';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { JUser } from '@trungk18/interface/user';
import { tap } from 'rxjs/operators';
import { until } from 'protractor';
import { NoWhitespaceValidator } from '@trungk18/core/validators/no-whitespace.validator';
import { DateUtil } from '@trungk18/project/utils/date';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'add-issue-modal',
  templateUrl: './add-issue-modal.component.html',
  styleUrls: ['./add-issue-modal.component.scss']
})
@UntilDestroy()
export class AddIssueModalComponent implements OnInit {
  reporterUsers$: Observable<JUser[]>;
  assignees$: Observable<JUser[]>;
  issueForm: FormGroup;
  editorOptions = quillConfiguration;

  get f() {
    return this.issueForm?.controls;
  }

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private projectService: ProjectService,
    public projectQuery: ProjectQuery
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.reporterUsers$ = this.projectQuery.users$.pipe(
      untilDestroyed(this),
      tap((users) => {
        const [user] = users;
        if (user) {
          this.f.reporterId.patchValue(user.id);
        }
      })
    );

    this.assignees$ = this.projectQuery.users$;
  }

  initForm() {
    this.issueForm = this.fb.group({
      type: [IssueType.TASK],
      priority: [IssuePriority.MEDIUM],
      title: ['', NoWhitespaceValidator()],
      description: [''],
      reporterId: [''],
      userIds: [[]]
    });
  }

  submitForm() {
    if (this.issueForm.invalid) {
      return;
    }
    const now = DateUtil.getNow();
    const issue: JIssue = {
      ...this.issueForm.getRawValue(),
      id: IssueUtil.getRandomId(),
      status: IssueStatus.BACKLOG,
      createdAt: now,
      updatedAt: now
    };

    console.log(issue);

    this.projectService.updateIssue(issue);
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

  closeModal() {
    this.modalRef.close();
  }
}
