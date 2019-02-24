# Helpthehomeless by The Dream Team

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration XX

 * Start date: February 15, 2019
 * End date: March 5, 2019

## Process

(Optional:) Quick introduction

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.
 * Roles should reflect the structure of your team and be appropriate for your project. Not necessarily one role to one team member.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)


| Name            | Responsibilities                       | Strengths                    | Weaknesses                     |
|-----------------|----------------------------------------|------------------------------|--------------------------------|
| Xuhao Yu        | "back end", integration                | js, android, data management | memory, ios, react             |
| Samarth Agarwal | "back end", database                   | Java, Databases, HTML/CSS    | JavaScript, Node.js, React     |
| Letian Zhao     | "front end"                            | Java, JavaScript, SQL        | React, Swift,  App Development |
| Ivan Shen       | "front end", Testing, Trello moderator | Java, JavaScript, Testing    | Expo, Swift, SQL, React        |
| Mohammed Ahmed  | "back end", database                   | Java, Kanban, Node.js        | React, Swift, Data Management  |
| Andrew Mihai    | "front end", meetings note taker       | Java, MVC methodology, Swift | React,  Databases, Javascript  |
| Kumar Damani    | Scrum master, server side, API         | web, sql, kanban             | React, graphic design, apps    |

#### Team Rules

Describe your team's working culture.

Communications:
 * What is the expected frequency? What methods/channels are appropriate?
> We have a slack channel "logistics" where we discuss anything related to scheduling, general communication.
> Anything related to a task, is discussed in the comment section of the corresponding trello card.
> Code reviews are discussed in the comment section of the pull request.
> A github wiki is also maintained for documentation.
> Frequency is ~3-5 hrs for each of them.
 * If you have a partner project, what is your process (in detail) for communicating with your partner?

Meetings:
 * How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
> We hold an in-person sprint meeting every Tuesday and everyone is expected to attend that meeting. We understand that sometimes other commitments might take priority and the person may not be able to attend in-person, so that person can also attend via video chat over Discord.
> During the meetings, the scrum master goes over each item in the agenda (distributed beforehand). This will involve getting to know what each person has done over the last week, and are currently working on. Readying tasks for the upcoming sprint by ensuring the developer understand exactly what is expected from the task.

Conflict Resolution:
 * List at least three team scenarios/conflicts you discussed in lecture and how you decided you will resolve them. Indecisions? Non-responsive team members? Any other scenarios you can think of?
> Asked on piazza if we need to come up with this again.

#### Events

Describe meetings (and other events) you are planning to have:
 * When and where? Recurring or ad hoc? In-person or online?
 > We have mandatory in-person meetings every Tuesday from 3-6 pm inside a booked study room at the Gerstein Library. We have an online meeting on Fridays from 4-6 pm if needed.
 * What's the purpose of each meeting?
 > The purpose of each meeting is to determine what everbody has done the previous week and what features need to be worked on for the current week.
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.

> Stays same as d1

#### Artifacts

List/describe the artifacts you will produce in order to organize your team.

 * Artifacts can be To-Do lists, Task boards, schedule(s), etc.
   * A snapshot of the Trello board to keep track of our tasks:
![snapshot of trello board](https://i.imgur.com/iFWRP3n.jpg)

   * Link to the [wiki](https://github.com/csc301-winter-2019/project-team-02/wiki) home page. You can see the various pages we've added in the sidebar.
   * A snapshot of the Slack channel "meetingnotes" where we post meeting agendas and notes from a meeting:
![](https://i.imgur.com/kb0uqMJ.png)

 * We want to understand:
   * How do you keep track of what needs to get done?
     > We create a Trello card in the backlog column
   * How do you prioritize tasks?
     > Tasks at the top of the Backlog column are the highest priority. These are the tasks necessary to have a MVP. So fancy UI elements will get de-prioritized in place of business logic tasks.
   * How do tasks get assigned to team members?
      > We want everyone to contribute so those who did not contribute much the previous week will get priority at the upcoming tasks. They can pick whatever task they feel they can complete in that week from the Ready for Work column.


#### Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.


 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.

>You can view the detailed description in our repo wiki page [Development Workflow](https://github.com/csc301-winter-2019/project-team-02/wiki/Development-Worklfow) for how our Trello board connects to github and our "process".

> We have a specific page for dealing with code conflicts in our wiki page [Resolving-Code-Conflicts](https://github.com/csc301-winter-2019/project-team-02/wiki/Resolving-Code-Conflicts)

 * If applicable, specify any naming conventions or standards you decide to adopt.
> Naming of branches reflect the Trello card no. found in the url. Branches begin with either "feat" or "fix" depending on the Trello label, followed by the card no. For eg, feat/4.

 * Describe your overall deployment process from writing code to viewing a live application
>TL;DR

 1. Developer pushes a feature to their branch.
 2. They create a pull request from their branch into `qa` branch adding at least two reviewers. Once approved, the developer completes the merge and "deploys" it to a qa environment.
 3. Another team member will test it in the qa environment and decide if it is good enough. If good enough, the tester will move the trello card into "Ready for Release" column.
 4. The developer will then create the pull request from their branch into `master` without needing any reviewers, and complete the merge.
 5. They will then deploy it to a production environment and self test that everything is okay.
 * What deployment tool(s) are you using and why
> Expo for deploying to mobile. It allows us to write the same code for android and ios.
> Heroku for deploying to the web. It has a nice integration with git, and works well with our tech. stack.
 * Don't forget to **explain why** you chose this workflow or particular aspects of it!
> We chose this workflow so that each feature/fix is separated into its own branch so that it is easier to apply filters in the future.
> We deploy to `qa` first so that the `master` branch always has code that is ready to be deployed after it has been thoroughly tested in the `qa` branch among other developing features. This minimizes the likelihood that once we do merge to `master`, nothing *existing* will break.



## Product

#### Goals and tasks

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

 >1. Have the mobile send its location to the server.
 >2. Have a website display all locations ever sent on first page load on a map.
 >3. A new mobile request gets added to the website without a page reload.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.

 > A video/screencast of the mobile sending its location to the server.
 > A video/screencast of the website live updating by adding a new marker on the map based on the new request.
