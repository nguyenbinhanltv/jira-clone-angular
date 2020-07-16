import { Component, OnInit } from '@angular/core';
import { ProjectService } from './state/project/project.service';
import { AuthService, LoginPayload } from './auth/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  expanded: boolean;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService
  ) {
    this.expanded = true;
  }

  ngOnInit(): void {
    if (typeof(Storage) !== undefined) {
      this.authService.login(
        {
          email: sessionStorage.getItem('email'),
          password: sessionStorage.getItem('password')
        }
      );
    }
    this.projectService.getProject();
    this.handleResize();
  }

  handleResize() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      console.log(e);
      this.expanded = e.matches;
    });
  }

  manualToggle() {
    this.expanded = !this.expanded;
  }
}
