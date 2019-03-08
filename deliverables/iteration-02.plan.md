# Helpthehomeless by The Dream Team

## Iteration XX

 * Start date: February 15, 2019
 * End date: March 5, 2019

## Process

#### Roles & responsibilities


| Name            | Responsibilities                       | Strengths                    | Weaknesses                     |
|-----------------|----------------------------------------|------------------------------|--------------------------------|
| Andrew Mihai    | "front end", meetings note taker       | Java, MVC methodology, Swift | React,  Databases, Javascript  |
| Ivan Shen       | "front end", Testing, Trello moderator | Java, JavaScript, Testing    | Expo, Swift, SQL, React        |
| Kumar Damani    | Scrum master, server side, API         | web, sql, kanban             | React, graphic design, apps    |
| Mohammed Ahmed  | "back end", database                   | Java, Kanban, Node.js        | React, Swift, Data Management  |
| Samarth Agarwal | "back end", database                   | Java, Databases, HTML/CSS    | JavaScript, Node.js, React     |
|Letian Zhao|"front end"   | Java, JavaScript, SQL  |React, Swift,  App Development  |
|Xuhao Yu|"back end", integration|js, android, data management| memory, ios, react|

> Note: Letian Zhao and Xuhao Yu ended up dropping the course after this iteration began

#### Team Rules

Communications:
* We have a slack channel "logistics" where we discuss anything related to scheduling, general communication.
* Anything related to a task, is discussed in the comment section of the corresponding trello card.
* Code reviews are discussed in the comment section of the pull request.
* A github wiki is also maintained for documentation.
* Frequency is ~3-5 hrs for each of them.

Meetings:
* We hold an in-person sprint meeting every Tuesday and everyone is expected to attend that meeting. We understand that sometimes other commitments might take priority and the person may not be able to attend in-person, so that person can also attend via video chat over Discord.
* During the meetings, the scrum master goes over each item in the agenda (distributed beforehand). This will involve getting to know what each person has done over the last week, and are currently working on. Readying tasks for the upcoming sprint by ensuring the developer understands exactly what is expected from the task.

Conflict Resolution:
* Same as iteration-01, see [here](https://github.com/csc301-winter-2019/project-team-02/blob/master/deliverables/iteration-01.plan.md).

#### Events

 * We have mandatory in-person meetings every Tuesday from 3-6 pm inside a booked study room at the Gerstein Library. We have an online meeting on Fridays from 4-6 pm if needed.
 * The purpose of each meeting is to determine what everybody has done over the previous week and what tasks need to be worked on for the upcoming week.
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.

#### Artifacts

* A snapshot of the Trello board to keep track of our tasks:
![snapshot of trello board](https://i.imgur.com/iFWRP3n.jpg)

* Link to the [wiki](https://github.com/csc301-winter-2019/project-team-02/wiki) home page. You can see the various pages we've added in the sidebar.
* A snapshot of the Slack channel "meetingnotes" where we post meeting agendas and notes from a meeting:
![](https://i.imgur.com/kb0uqMJ.png)


To keep track of what needs to get done, we create a Trello card in the backlog column. Tasks at the top of the Backlog column are the highest priority. These are the tasks necessary to have a MVP. So fancy UI elements will get de-prioritized in place of business logic tasks.

We want everyone to contribute so those who did not contribute much the previous week will get priority at the upcoming tasks. They can pick whatever task they feel they can complete in that week from the Ready for Work column.


#### Deployment and Github Workflow


>You can view the detailed description in our repo wiki page [Development Workflow](https://github.com/csc301-winter-2019/project-team-02/wiki/Development-Worklfow) for how our Trello board connects to github and our "process".

> We have a specific page for dealing with code conflicts in our wiki page [Resolving-Code-Conflicts](https://github.com/csc301-winter-2019/project-team-02/wiki/Resolving-Code-Conflicts)

* Naming of branches reflect the Trello card no. found in the url. Branches begin with either "feat" or "fix" depending on the Trello label, followed by the card no. For eg, feat/4.

>TL;DR

 1. Developer pushes a feature to their branch.
 2. They create a pull request from their branch into `qa` branch adding at least two reviewers. Once approved, the developer completes the merge and "deploys" it to a qa environment.
 3. Another team member will test it in the qa environment and decide if it is good enough. If good enough, the tester will move the trello card into "Ready for Release" column.
 4. The developer will then create the pull request from their branch into `master` without needing any reviewers, and complete the merge.
 5. They will then deploy it to a production environment and self test that everything is okay.

 * Deployment
   * Expo for deploying to mobile. It allows us to write the same code for android and ios.
   * Heroku for deploying to the web. It has a nice integration with git, and works well with our tech. stack.

We chose this workflow so that each feature/fix is separated into its own branch so that it is easier to apply filters on GitHub in the future to find features.

We deploy to `qa` first so that the `master` branch always has code that is ready to be deployed after it has been thoroughly tested in the `qa` branch among other developing features. This minimizes the likelihood that once we do merge to `master`, nothing *existing* will break.



## Product

#### Goals and tasks

1. Have the mobile send its location to the server.
2. Have a website display all locations ever sent on first page load on a map.
3. A new mobile request gets added to the website without a page reload.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

* A video/screencast of the mobile sending its location to the server.
* A video/screencast of the website live updating by adding a new marker on the map based on the new request.
