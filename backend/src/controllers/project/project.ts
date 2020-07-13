interface User {
  id: string;
  name: string;
  avatarUrl: string;
  projectId: string;
}

interface Issue {
  id: string,
  title: string,
  description: string,
  type: string,
  status: string,
  priority: string,
  listPosition: number,
  createdAt: string,
  updatedAt: string,
  reporterId: string,
  userIds: Array<string>
}

export interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  createAt: string;
  updateAt: string;
  users: Array<User>;
  issue: Array<Issue>;
}

export const Project = {
  id: '140892',
  name: 'ITSS Angular Jira Clone',
  url: 'https://github.com/nguyenbinhanltv/jira-clone-angular',
  description:
    'A Jira clone app built with Angular, Akita, Firebase, And Nestjs',
  category: 'Software',
  createdAt: '2020-06-12T16:00:00.000Z',
  updatedAt: '2020-06-13T16:00:00.000Z',
  users: [
    {
      id: 'qCCLitIicDSoYri9HktzwenWeBq2',
      name: 'Gia Linh',
      avatarUrl:
        'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-1/p100x100/104261807_2700237350216575_373250270826185587_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_oc=AQkU67fTzFbpwdJKLH8-IbLhro4ZqPh1Gf66u3b3FLXe2vtGNzUKx8fD2y6yLuBJKDUC-AMhPhTOpieC2Y61pirr&_nc_ht=scontent.fdad3-3.fna&_nc_tp=6&oh=8df5fb135ce640a37fc4285eb547b6d4&oe=5F2D1030',
      projectId: '140892',
    },
    {
      id: 'qgnw1SYg9xgOXf3bT5aKJheP9643',
      name: 'Huynh Duc',
      avatarUrl:
        'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-1/p100x100/102659664_962210760898666_4895454007840805013_n.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_oc=AQnMBmD2Dj1mX-EqY4OtQtPx7C9zaClg0We1Y07e7lKQLXPUlbCsDt4EcgnpRFHRoxFPuRh8ZqWsucNRD4jk8qSC&_nc_ht=scontent.fdad3-1.fna&_nc_tp=6&oh=f24e97a5c47f6998ccdceea24c302218&oe=5F2B0AE5',
      projectId: '140892',
    },
    {
      id: 'refX8wo6qRQDykJOLB1mJHwRdQX2',
      name: 'Minh Tuan',
      avatarUrl:
        'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-1/p100x100/106528149_646782815922947_7801399467895756321_n.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_oc=AQmPWOnYQ_OORDslvmlwmY-DyXNXoWtxXqIqCaJs1JYZrJe-ake22pcPPwYfBszm-dMBoGp0f-FjeHIYXkKG2qR3&_nc_ht=scontent.fdad3-1.fna&_nc_tp=6&oh=ef463b8d93d6bbfc50e03aee1d95c05c&oe=5F2D0BDC',
      projectId: '140892',
    },
    {
      id: 'XnY4TAu295bHzbnwgjsYA7q8V9S2',
      name: 'Quoc Thang',
      avatarUrl:
        'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-1/p100x100/89885037_1410919889087661_1356659012073947136_o.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_oc=AQlQfTtKh2bW26DDbUu77TnCKCsOyBA0F8w_pqVoZFB2HUkfJjFH_Xwo_142_eI57ROxdBAKXcp5nN5gh3_ZogFS&_nc_ht=scontent.fdad3-1.fna&_nc_tp=6&oh=d0bbd6d7ddebe06fe07a013e1c6b9d71&oe=5F2B01E2',
      projectId: '140892',
    },
    {
      id: 'pk0inEQE3yWPASg0OEkKA4tiwYf2',
      name: 'Binh An',
      avatarUrl:
        'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg',
      projectId: '140892',
    },
  ],
  issues: [
    {
      id: '9013',
      title: 'Set up project structure ⛏️⛏️',
      description:
        "<h3>Create front end and backend folder</h3><ul><li>npm init</li><li>CLI new application</li><li>TailwindCSS configuration&nbsp;</li><li>WIP Landing Page</li><li>Build command on the root folder</li><li>Deploy to Netlify</li><li>Configure sub domain redirect - Need to retest</li><li>Configure SVG icon definition</li><li>Add Google Analytics - IMPORTANT</li><li>Refactor to module lazy loading</li><li>Add Akita - <a href='https://datorama.github.io/akita/docs/angular/architecture/#session-feature' rel='noopener noreferrer' target='_blank' style='color: inherit;'>https://datorama.github.io/akita/docs/angular/architecture/#session-feature</a></li><li>Tweet Icon</li></ul>",
      type: 'Task',
      status: 'Done',
      priority: 'Highest',
      listPosition: 1,
      createdAt: '2020-06-12T14:40:01.262Z',
      updatedAt: '2020-06-12T14:40:01.262Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: [
        'qCCLitIicDSoYri9HktzwenWeBq2',
        'qgnw1SYg9xgOXf3bT5aKJheP9643',
      ],
    },
    {
      id: '9210',
      title: 'TailwindCSS configuration 😭😭😭',
      description:
        "<h1>No official guide to configure TailwindCSS and Angular<strong>⛏️⛏️</strong></h1><p><br></p><p>It took me few hours to try and configure with different option. Also, was confuse when PurgeCSS remove ng-zorro style...</p><p><br></p><p>I wrote one myself</p><p><br></p><p><a href='https://trungk18.com/experience/configure-tailwind-css-with-angular/' rel='noopener noreferrer' target='_blank'>https://trungk18.com/experience/configure-tailwind-css-with-angular/</a></p><p><br></p>",
      type: 'Task',
      status: 'Done',
      priority: 'Medium',
      listPosition: 2,
      createdAt: '2020-06-12T14:40:01.262Z',
      updatedAt: '2020-06-12T14:40:01.262Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: [
        'qCCLitIicDSoYri9HktzwenWeBq2',
        'refX8wo6qRQDykJOLB1mJHwRdQX2',
      ],
    },
    {
      id: '9361',
      title: 'Try leaving a comment on this issue.',
      description:
        '<p>Adding comments to an issue is a useful way to record additional detail about an issue, and collaborate with team members. Comments are shown in the&nbsp;<strong>Comments</strong>&nbsp;section when you&nbsp;<a href="https://confluence.atlassian.com/jira064/what-is-an-issue-720416138.html" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(0, 82, 204);">view an issue</a>.</p><p><br></p><ol><li>Open the&nbsp;<a href="https://confluence.atlassian.com/jira064/what-is-an-issue-720416138.html" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 82, 204);">issue</a>&nbsp;on which to add your comment.</li><li>Click the&nbsp;<strong>Add a comment</strong>&nbsp;button.</li><li>In the&nbsp;<strong>Comment</strong>&nbsp;text box, type your comment</li><li>Click the&nbsp;<strong>Save </strong>button or the <strong>Enter </strong>key to save the comment.</li></ol><p><br></p>',
      type: 'Story',
      status: 'InProgress',
      priority: 'Lowest',
      listPosition: 3,
      createdAt: '2020-06-12T14:40:01.346Z',
      updatedAt: '2020-06-12T14:40:01.346Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: ['pk0inEQE3yWPASg0OEkKA4tiwYf2'],
    },
    {
      id: '9451',
      title: 'Preparing backend API with GraphQL',
      description:
        '<h3>I will set up a GraphQL endpoint as soon as possible</h3><p>I am currently using NestJS and storing data on a <code>json</code> file. I like the idea behind GraphQL, it is the good chance to learn more about that technology.</p>',
      type: 'Story',
      status: 'Backlog',
      priority: 'Medium',
      listPosition: 1,
      createdAt: '2020-06-12T14:40:01.262Z',
      updatedAt: '2020-06-12T14:48:00.807Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: ['qCCLitIicDSoYri9HktzwenWeBq2'],
    },
    {
      id: '9631',
      title:
        'Each issue has a single reporter but can have multiple assignees.',
      description:
        "<h2>Try assigning this issue to <strong><u>Spider Man</u></strong>. <span style='color: rgb(51, 51, 51);'>🤣&nbsp;🤣&nbsp;🤣</span></h2>",
      type: 'Task',
      status: 'Selected',
      priority: 'Low',
      listPosition: 2,
      createdAt: '2020-06-12T14:40:01.350Z',
      updatedAt: '2020-06-12T14:51:09.653Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: [
        'XnY4TAu295bHzbnwgjsYA7q8V9S2',
        'refX8wo6qRQDykJOLB1mJHwRdQX2',
      ],
    },
    {
      id: '9546',
      title: 'Set up Akita state management',
      description:
        '<h2>I heard about Akita and would love to try this</h2><p>Akita is a state management pattern, built on top of RxJS, which takes the idea of multiple data stores from Flux and the immutable updates from Redux, along with the concept of streaming data, to create the Observable Data Stores model.</p><p></p>',
      type: 'Story',
      status: 'InProgress',
      priority: 'High',
      listPosition: 1,
      createdAt: '2020-06-12T14:40:01.304Z',
      updatedAt: '2020-06-12T14:52:02.173Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: ['qCCLitIicDSoYri9HktzwenWeBq2'],
    },
    {
      id: '9548',
      title: 'Make the CDK Drag and Drop animation smoother',
      description:
        "<h2>The drag and drop board is not working as I expected</h2><p>After finishing all the other heavy lifting parts, I will spend sometimes at the end to finalize the DnD. The current behavior is acceptable for now.</p><p><br></p><p><u>28 June 2020</u></p><p>After spending about half an hour on that, I found the bug. Basically, I applied the cdkDrag to my component issue-card. <u>Its height and width was collapsed to 0</u>. That's why the animation has no effect at all.</p><p><br></p><p>I fixed by fixing adding these CSS to the issue-card component.</p><p><br></p><pre class='ql-syntax' spellcheck='false'>:host&nbsp;{&nbsp;&nbsp;@apply&nbsp;flex&nbsp;flex-grow;&nbsp;&nbsp;margin-bottom:&nbsp;5px;}</pre>",
      type: 'Bug',
      status: 'Done',
      priority: 'High',
      listPosition: 1,
      createdAt: '2020-06-12T14:40:01.304Z',
      updatedAt: '2020-06-12T14:52:02.173Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: ['qCCLitIicDSoYri9HktzwenWeBq2'],
    },
    {
      id: '9584',
      title: 'What is Angular Jira clone application?',
      description:
        "<p>There have been a handful of cool Jira-cloned apps written in React/VueJS, which makes me wonder <strong>Why not Angular</strong>? And here you go.</p><p><br></p><p>This is <u>not only</u> a simplified Jira clone built with Angular 9, but also an example of a <u>modern, real-world</u> Angular codebase.</p><p><br></p><p><strong>Tech stack</strong></p><p><br></p><p><a href='https://raw.githubusercontent.com/trungk18/jira-clone-angular/master/frontend/src/assets/img/jira-clone-tech-stack.png' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214); background-color: rgb(255, 255, 255);'><img src='https://github.com/trungk18/jira-clone-angular/raw/master/frontend/src/assets/img/jira-clone-tech-stack.png' alt='Tech logos'></a></p><p><br></p><ul><li><a href='https://cli.angular.io/' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>Angular CLI</a></li><li><a href='https://datorama.github.io/akita/' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>Akita</a>&nbsp;state management</li><li><a href='https://nestjs.com/' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>NestJS</a></li><li>UI modules:</li><li class='ql-indent-1'><a href='https://tailwindcss.com/' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>TailwindCSS</a></li><li class='ql-indent-1'>Angular CDK&nbsp;<a href='https://material.angular.io/cdk/drag-drop/overview' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>drag and drop</a></li><li class='ql-indent-1'><a href='https://ng.ant.design/docs/introduce/en' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>ng-zorro</a>&nbsp;UI component:&nbsp;<code style='background-color: rgba(27, 31, 35, 0.05);'>tooltip</code>,&nbsp;<code style='background-color: rgba(27, 31, 35, 0.05);'>modal</code>,&nbsp;<code style='background-color: rgba(27, 31, 35, 0.05);'>select</code>,&nbsp;<code style='background-color: rgba(27, 31, 35, 0.05);'>icon</code> and more.</li><li class='ql-indent-1'><a href='https://github.com/KillerCodeMonkey/ngx-quill' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>ngx-quill</a></li><li><a href='https://www.netlify.com/' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>Netlify</a></li><li><a href='https://www.heroku.com/' rel='noopener noreferrer' target='_blank' style='color: rgb(3, 102, 214);'>Heroku</a></li></ul>",
      type: 'Task',
      status: 'Backlog',
      priority: 'Medium',
      listPosition: 2,
      createdAt: '2020-06-12T14:40:00.000Z',
      updatedAt: '2020-06-12T14:51:00.000Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: [
        'pk0inEQE3yWPASg0OEkKA4tiwYf2',
        'XnY4TAu295bHzbnwgjsYA7q8V9S2',
      ],
    },
    {
      id: '9554',
      title: 'Who is the author of Angular Jira clone?',
      description:
        "<h3>Hi! My name is Trung.</h3><p>I’m the only front-end engineer at Zyllem, where I work mostly with Angular to build client side web app. I love thinking about development and user experience. </p><br/><p>Find me around the web</p><p><br></p><ul><li>My blog: <a href='https://trungk18.com/' rel='noopener noreferrer' target='_blank'>https://trungk18.com/</a></li><li><a href='https://github.com/trungk18' rel='noopener noreferrer' target='_blank'>https://github.com/trungk18</a></li><li><a href='https://stackoverflow.com/users/3375906/trungk18' rel='noopener noreferrer' target='_blank'>https://stackoverflow.com/users/3375906/trungk18</a></li></ul><p><br></p>",
      type: 'Task',
      status: 'Backlog',
      priority: 'High',
      listPosition: 3,
      createdAt: '2020-06-12T14:40:00.000Z',
      updatedAt: '2020-06-12T14:51:00.000Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: ['qCCLitIicDSoYri9HktzwenWeBq2'],
    },
    {
      id: '9665',
      title: 'Angular router not working on Netlify on refresh',
      description:
        "<p>Old question, but for those who might stumble on it on how to enable angular routing in Netlify. </p><p><br></p><p>See the full answer on <a target='_blank' href='https://stackoverflow.com/a/52312060/3375906'>stackoverflow</a>.</p><p><br></p><p>Create a file <code>_redirects</code> in your <code>src</code> folder, add the following to it:</p><p><br></p><pre class='ql-syntax' spellcheck='false'>/*  /index.html 200",
      type: 'Bug',
      status: 'Done',
      priority: 'High',
      listPosition: 1,
      createdAt: '2020-06-12T14:40:00.000Z',
      updatedAt: '2020-06-12T14:51:00.000Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: [
        'refX8wo6qRQDykJOLB1mJHwRdQX2',
        'qgnw1SYg9xgOXf3bT5aKJheP9643',
      ],
    },
    {
      id: '9667',
      title:
        'When creating an issue, the assignee list is not working properly on searching',
      description:
        "After searching for an assignee on the list and clear the text, the option label was missing. It could be the bug on the ng-zorro select itself. If you have any idea, feel free to create a pull request. <br/> <br/><img src='https://raw.githubusercontent.com/trungk18/jira-clone-angular/master/frontend/src/assets/img/assignee-bug.gif' alt='Assignee issue' />",
      type: 'Bug',
      status: 'Selected',
      priority: 'High',
      listPosition: 1,
      createdAt: '2020-06-28T15:30:00.000Z',
      updatedAt: '2020-06-28T16:30:00.000Z',
      reporterId: 'qCCLitIicDSoYri9HktzwenWeBq2',
      userIds: ['qCCLitIicDSoYri9HktzwenWeBq2'],
    },
  ],
};
