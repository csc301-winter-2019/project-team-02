# Helpthehomeless by The Dream Team

## Iteration 2 - Review & Retrospect

 * When: March 8, 2019
 * Where: BA 3195

## Process - Reflection

#### Decisions that turned out well

1. One process-related decision that turned out to be sucessful was our weekly meetings on Tuesday. These meetings allowed us to review what each member did the previous week and assign tasks for what each member had to do the coming week.


2. Another process-related decision that turned out to be successful was using the Trello board to manage tasks. This allowed all the members to see the status of tasks so that people don't end up doing the same thing by mistake. Trello also allowed us to flesh out the details of what is expected from a task by defining an "Acceptance Criteria" (insert acceptance criteria sample from Trello).
![](https://i.imgur.com/XrRxlji.png)

3. Using Slack as our primary communication channel was a good decision as Slack makes several auxiliary tasks easier. With Slack we can easily create and keep track of communication channels that each serve a specific purpose, and record communications that we would need as artifacts (e.g. meetingnotes channel)
![](https://i.imgur.com/Mor4nys.jpg)


#### Decisions that did not turn out as well as we hoped

1. Code reviews were expected to be thorough but ended up being blindly approved. Considering that none of us are fully familiar with all the tools we are using, people weren't equipped to thoroughly review code.
2. A lot of the time we had conflicts when trying to merge our code because the master branch was too far behind where we were trying to merge. This is because the testing process was very arbitrary so a lot of tasks were sitting idle untested. This is important so that all of us can get to know how the entire app works, and get experience with all the tools.
3. In the beginning, we decided to split into web and mobile sub teams. However, this resulted in a clear gap between people working on mobile vs. web. People from the web team were unaware of what was going on with what the mobile team was doing and vice versa. As a result, time was wasted during weekly meetings when discussing our weekly progress, as team members had to explain the work that they did to team members who were unfamiliar.

#### Planned changes

1. Since all the team members were not fully familiar with the code they were reviewing, we decided that only the team members who are actively involved in that particular part of development should review the code. For example, if a pull request was created that contained changes to the mobile application, then only Andrew and Fahim need to review it since they worked the most on mobile.
2. Because the master branch was always behind the qa branch, we came up with the decision to reserve 30-45 minutes during our weekly Tuesday meeeting to test the qa branch and update the master branch. Another approach we are thinking of is to schedule a 1 hour meeting on another day and dedicate it to perform testing and update the master branch. We have a testing heroku application deployed just for testing. Our testing strategy will be to update the testing app with the qa branch and perform manual testing to see if the functionality is correct. Once we verify that the application works as expected, we will merge the qa branch into master.
3. To address the issue of disconnect between sub teams, we plan on switching the roles for the next iteration, so the people who worked on mobile will now work on web, and vice versa. This will allow team members to better understand different parts of the application and save us time during our weekly updates, as it eliminates the confusion unfamiliar parts.

## Product - Review

#### Goals and/or tasks that were met/completed:

1. Mobile app sends its location to the server.
2. Website displays all locations ever sent on first page load on a map.
3. A new mobile request gets added to the website without a page reload.

![](https://i.imgur.com/xOUL71r.jpg)
> Note the tasks in the "Done" column.

#### Goals and/or tasks that were planned but not met/completed:

 All planned tasks were completed (with minor bugs).

## Meeting Highlights

Going into the next iteration, our main insights are:

1. For the most part, the status quo is fine as we did manage to meet all our goals from the plan.
2. In our final meeting, we discovered a few minor bugs in features of the application that were completed some time ago. In the future, edge-cases should be tested before claiming that a feature is complete.
3. Having a scheduled testing day or reserving a testing time during our weekly Tuesday meeting will be helpful in avoiding conflicts and keep the master up to date.
4. We feel that our application is lacking documentation. We will focus more on writing more documentation on the features of our application and how to use our application.
