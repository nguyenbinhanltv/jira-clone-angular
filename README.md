# A simplified Jira clone built with Angular 9 and Akita

## Tech stack

- [Angular CLI][cli]
- [Akita][akita] state management
- [NestJS][nestjs]
- UI modules:
  - [TailwindCSS][tailwind]
  - Angular CDK [drag and drop][cdkdrag]
  - [ng-zorro][ng-zorro] UI component: `tooltip`, `modal`, `select`, `icon` and more.
  - [ngx-quill][quill]
- [Netlify][netlify]
- [Firebase][firebase]

[cli]: https://cli.angular.io/
[akita]: https://datorama.github.io/akita/
[nestjs]: https://nestjs.com/
[tailwind]: https://tailwindcss.com/
[cdkdrag]: https://material.angular.io/cdk/drag-drop/overview
[ng-zorro]: https://ng.ant.design/docs/introduce/en
[quill]: https://github.com/KillerCodeMonkey/ngx-quill
[netlify]: https://www.netlify.com/
[firebase]: https://firebase.google.com/

## Setting up development environment in this project 🛠

- `git clone https://github.com/nguyenbinhanltv/jira-clone-angular.git`
- `cd jira-clone-angular`
- `npm run build:back` for build the API
- `npm run start:back` for running the API
- The API server should run on `http://localhost:5000/jira-clone-angular-backend/us-central1/api`
- `npm run start:front` for angular web application
- The app should run on `http://localhost:4200/`
