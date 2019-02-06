# Helpthehomeless.to by The Dream Team
> This document is a work in progress!
#### Q1: What are you planning to build?

An app with a web component that allows users to report homeless people on the street who might be at health risks due to sever weather conditions.

Currently, in order to report a homeless person, one must dial 311, then the operator redirects the caller to the "Shift Leader" at "Street to Homes" who sends out an outreach worker nearby for help. Based on the information we gathered by calling them directly, all of this is done over the phone i.e. there is no digital solution.

311 is not a dedicated help line for reporting homeless people in need. It serves as a line for various city services such as waste collection, road repairs, and property issues. As a result, callers may be waiting [up to 12 minutes](https://www.thestar.com/news/gta/2010/07/29/wait_times_for_311_service_surge.html) to talk to an operator.

Given the dire nature of homelessness, we believe there should be a *faster* dedicated alternative. This way people can not only skip the lineup of calling 311 and go about their life/etc, but also save 311 operators' time.

Here is a sample mockup for the app flow only:
![](https://i.imgur.com/AovJOto.png)

#### Q2: Who are your target users?

Our primary target are people living in Toronto who are **uncomfortable calling 311** in a public environment but still have the urge to report homeless people to get them the help they need. These people are culturally classified as "millennials".

A couple of example personas:

* Lisa is a "millennial" in a streetcar who spots a homeless person during her commute to work. Due to the street car being crammed during at this time, she feels too awkward to pull out her phone and dial 311 to report a homeless person. She wishes she could report this person by some other means.
* Bob is a 34-year old construction worker who lives in Toronto and walks to work everyday. On his way to work he sees many homeless people struggling on the streets but he doesn't want to stop and dial 311 as that will take too much time and he will be late for work. As someone who wants to help the homeless, Bob wants an efficient way to be able to report homeless people that seem to be in critical need of shelter so that he can do his part in helping the homeless while arriving to work on time.
* Victor is a street outreach worker who would like a unified summary of the homeless people around the city so that he and his team can organize their outreach plan better.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Users would choose our product because our solution would simplify and expedite the process of reporting a homeless person in need.


Our application will simplify the process by eliminating the requirement to call a number, allowing users to report a homeless person at the simple press of a button. Currently, individuals who wish to report an in-need homeless person to 311 must be processed through an automated system determining what they wish to report, as 311 covers more than just homelessness. Then they must wait for a specific operator to become available. Users of our mobile app may report a homeless person without wasting all this time and effort. As of now, there is no city certified application that performs the functionality of our application.

#### Q4: How will you build it?

React Native + Expo for Android and iOS (JavaScript, HTML CSS)
Node.js/Express server where we will pre-process the data so that we can display it in aggregate form in the web component. (JavaScript, HTML, CSS)
PostgreSQL to store the data (psql)
We are still waiting for Open311 to respond to our request to add functionality to handle requests for homeless reporting. If this comes through, it will be our 3rd party API.

We will deploy using Heroku.
Testing will happen once code-review has passed, by a different team member manually.

Here is a simple diagram:
![](https://i.imgur.com/XAHyHI7.png)

----



### Highlights

 1. **App vs web**: we decided that the primary way to use the app by the users should be an app because a website adds an extra step of entering a url to access our service. Our team is also more comfortable in an app environment as opposed to web, so an app makes the most sense for us.
 2. **Open311 API vs direct solution**: 311 already has an API, but we decided against this as it does not currently handle general service requests or requests for street outreach. So we decided to build a solution for "Street to Homes" who 311 relies on anyways.
 3. **Dedicated roles vs flexible roles**: dedicated roles have the advantage that each member is only asked to do what they know best, however given the chaos of our schedules, as well as none of us really know any of our tech stack all that well, everyone should suffer equally. :fist:
