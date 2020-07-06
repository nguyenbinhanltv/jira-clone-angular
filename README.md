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

## Time spending

It is a side project that I only spent time outside of the office hours to work on. One day, my team and I were fire fighting on PROD until 11 PM. After taking a shower, I continue with Angular Jira clone for another two hours...

According to waka time report, I have spent about 45 hours working on this project. Which is equivalent to watch the [whole Stranger Things series twice][stranger].

I really enjoyed working on this project. The interactive kanban board took me sometimes, it is challenging but exciting at the same time.

[stranger]: [https://www.bingeclock.com/s/stranger-things/]

![Jira clone built with Angular 9 and Akita - Time spending][time]

## Setting up development environment 🛠

- `git clone https://github.com/trungk18/jira-clone-angular.git`
- `cd jira-clone-angular`
- `npm run start:back` for the API
- The API server should run on `http://localhost:3000`
- `npm run start:front` for angular web application
- The app should run on `http://localhost:4200/`

### Unit/Integration tests 🧪

I skipped writing test for this project. I might do it for the proper backend GraphQL API.

## Compatibility

It was being tested on IE 11, Chrome and Firefox. For Safari, there are some minor alignment issues.

## Author: Trung Vo ✍️

- A young and passionate front-end engineer. Working with Angular and TypeScript. Like photography, running, cooking, and reading books.
- Personal blog: https://trungk18.com/
- Say hello: trungk18 [et] gmail [dot] com

## Contributing

If you have any ideas, just [open an issue][issues] and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as you'd like. [Pull requests][pull] are warmly welcome.

## Credits

Inspired by [oldboyxx/jira_clone][oldboyxx] and [Datlyfe/jira_clone][datlyfe].

I reused part of the HTML and CSS code from these projects.

## License

Feel free to use my code on your project. It would be great if you put a reference to this repository.

[MIT](https://opensource.org/licenses/MIT)

[oldboyxx]: https://github.com/oldboyxx/jira_clone
[datlyfe]: https://github.com/Datlyfe/jira_clone
[stack]: frontend/src/assets/img/jira-clone-tech-stack.png
[demo]: frontend/src/assets/img/jira-clone-angular-demo-trungk18.gif
[time]: frontend/src/assets/img/time-spending.png
[issues]: https://github.com/trungk18/jira-clone-angular/issues/new
[pull]: https://github.com/trungk18/jira-clone-angular/compare
[100days]: https://github.com/angular-vietnam/100-days-of-angular
