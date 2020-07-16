import { Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';
import { ProjectQuery } from './project/state/project/project.query';
import { ProjectService } from './project/state/project/project.service';
import { GoogleAnalyticsService } from './core/services/google-analytics.service';
import { AuthService } from './project/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  constructor(
    public router: Router,
    public projectQuery: ProjectQuery,
    public authService: AuthService,
    private cdr: ChangeDetectorRef,
    private projectService: ProjectService,
    private googleAnalytics: GoogleAnalyticsService,
  ) {
    this.projectService.setLoading(true);
    if (environment.production) {
      this.handleGoogleAnalytics();
    }
  }

  handleGoogleAnalytics() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.googleAnalytics.sendPageView(event.urlAfterRedirects);
      }
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
