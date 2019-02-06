# Helpthehomeless.to by The Dream Team
> This document is a work in progress!
## Process

#### Roles & responsibilities

|Name   |Responsibilities   |Strengths  |Weaknesses  |
|-------|-------------------|-----------|------------|
|Xuhao Yu|"back end", integration|js, android, data management| memory, ios, react|
|Samarth Agarwal|"back end", database|Java, Databases, HTML/CSS|JavaScript, Node.js, React|
|Letian Zhao|"front end"   | Java, JavaScript, SQL  |React, Swift,  App Development  |
|Ivan Shen| "front end", Testing | Java, JavaScript, Testing | Expo, Swift, SQL, React |
|Mohammed Ahmed | "back end", database | Java, Kanban, Node.js  | React, Swift, Data Management|
| Andrew Mihai | "front end", meetings note taker| Java, MVC methodology, Swift | React,  Databases, Javascript|
| Kumar Damani | Scrum master, server side, API |web, sql, kanban | React, graphic design, apps|

Refer to the App Components diagram in `project.md` to see what responsibilities correspond to what components that person will work on.

#### Team Rules

**Communications:**

Slack for general for communications that should have a 4 - 6 hr response window (assuming that it is appropriate for response (i.e. not sleeping)). Beyond this window, use another form of communication such as messenger, sms etc.

We expect to meet in-person once a week on Tuesdays (3pm-6pm) for our Sprints, with a seperate allocated time on Fridays (4pm - 6pm) in which a meeting can take place (in person or online) if we decide an additional meeting would be required for any given week.


**Meetings:**

We will use Trello to assign tasks to members. During a meeting we will go over the status of each in-progress task on the Kanban board, then we will move tasks from the "backlog" to the "Ready for work" column. We are trying to follow the Kanban process:
![a kanban board image](https://d30s2hykpf82zu.cloudfront.net/wp-content/uploads/2018/11/Explicit-Policies-in-Kanban-Board-1024x613.png)
> Img Source https://www.digite.com/kanban/what-is-kanban/

If a member is absent at meetings without due cause, we will talk to them in person to understand their reasoning as see how we can accomodate them. If this becomes a recurring issue, report to Adam for advice.

Team decisions
* All design, implementation, and organizational decisions are made by the team via a majority vote. Since there are seven team members, there will always be a majority.
#### Conflict Resolution:
1. **A team member is unresponsive to repeated online messages.**

Exhaust all possible methods of communication that we've agreed to communicate on such as Facebook, Slack, and text message. If all methods fail, then attempt to talk to them in person during lecture or tutorial. As a last resort, ask the professor to attempt to get in contact with the team member.

2. **A team member makes a quick decision without consulting the rest of the team.**

All major team decisions are made during team meetings. As per the team rules, ideas are brought up during meetings and if the majority agree, then we make that decision as a team.

additional: If a team member already decided on the quick decision without consulting, we will consider back tracking to the state of the team before the decisioon (if possible). At this point we will try to decide whether or not the decision was right or if there was some other more suitable decision. If it is absolutely not possible to change the decision, we will contact Adam with respect to this decision and seek advice to the situation.

3. **A team member is not meeting their deadlines**

During every team meeting, every team member gives an update on the status of their work. This gives the team member multiple opportunities to bring up any concerns regarding deadlines. However, if a team member is unable to meet a deadline due to unforseen circumstances, we will discuss, as a team, the possible options such as redistributing the work or assigning more resources to the task.
#### Events


Each Tuesday meeting will be in a "Scrum Sprint" format at Gernstein library. We will pull up github issues (or Trello) and discuss the status of each task in-progress and completed, and if there are any impediments, how to deal with them as a team. Then we will re-prioritize the "to-do" column as well as move tasks from "backlog" to "to-do" for the upcoming week.

Friday meetings are for urgent issues, deadlines, ideas, suggestions, or any unforseen circumstances. They can either be in person or over Skype.
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.

#### Artifacts


 * Slack channels - dedicated channels for specific things like scheduling, developemnt, research etc. There are integrations in Slack to allow for more detailed scheduling.
 * Trello (Kanban) board following a kanban process for how each card gets moved to the next section. During the meetings we will pull up the board and reprioritize based on status updates on current and previously assigned tasks. New tasks will get assigned primarly to the next available developer unless they specifically do not wish to do this task.



## Product

#### Goals and tasks


Researching existing solutions that might already exist, i.e. making sure that the problem actually exists.

Research to understand the problem better by communicating with 311.

Decide on the communicative process and expectations. Setting up Slack channels for meeting agendas, notes. Set up Trello for development process.

Decide on the technology stack, by researching and identifying possible options, then coming to a decision on what the group feels most comfortable with.


#### Artifacts

* Research notes (links, handwritten notes etc.)
  * open311 api info: [faq](https://www.toronto.ca/home/311-toronto-at-your-service/open311-api-and-mobile-apps/information-for-developers-open311-api/), [requests documentation](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#e2634d40-0dbf-4d91-12fa-83f039307e93). These are important as we need to know what functionality the API can support so that we can determine whethere it is part of our design.
  * 311 street outreach reporting: [here](https://www.toronto.ca/311/knowledgebase/kb/docs/articles/shelter,-support-and-housing-administration/homelessness-initiatives-and-prevention-services/homeless-person-in-need-of-assistance-street-help-street-outreach.html). This gives us a starting point for our reasearch about how the present solution works.
  * Questions asked to 311 operator:![questions asked image](https://i.imgur.com/24uCia7.jpg)
  * Rough 311 + "Street to Homes" worker call summary:![311 + Street to Homes worker call summary image](https://i.imgur.com/HKuNXay.jpg). This gives us quite a bit of insight for what we should be focusing on and what the real problems and challenges outreach workers face.
  * Open data catalogue: [daily shelter occupancy](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#711ba031-b32b-3390-ce54-22c15ac6389f). This is one of many data sets that we can query to add additional functionality to our application (such as predictive power).
  * Design mockups/component diagram: see ```product.md``` for UI mockup, and for high-level diagram. This helps us get a visual idea for what we are building, and the general flow of the application.
