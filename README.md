# Social-Network-API ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Overview

Social Network API is built for social network web applications where users can share their thoughts, react to other users' thoughts and add friends to their friends list.  This application is built using MongoDB as the database, Mongoose is the ODM used to interact with the database, Express.js is used for routing. Moment.js is used for formatting dates.

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

```

## Table of Contents

- [Overview](#overview)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Walkthrough video](#walkthrough-video)
- [Questions](#questions)
- [License](#license)

  ## Installation

  - Clone repository.
  - Should have access to Visual Studio, MongoDB and Insomnia
  - Run npm install to install packages/dependencies (Express, Mongoose, and Moment).

  ## Usage

  Open the Integrated Terminal from the root directory of the application and run the command "node index.js". Routes can be tested using Insomnia.

  ## Screenshots

  ![Users](/assets/Users.png)

  ![Thoughts](/assets/Thoughts.png)
 
  ## [Walkthrough video](https://drive.google.com/file/d/1hoxa2f2BH0lcEajkGP88Q7QhkQ8WqXPH/view?usp=sharing)

  ## Questions

  For any questions regarding the project please visit my
  GitHub Profile @
  [chaitra-srinivas](https://github.com/dfdfgfd)
  or you can reach me @ cmurthy.dev@gmail.com

  ## License

  [MIT](https://opensource.org/licenses/MIT)
  This application is convered under the MIT License.

  Copyright © 2021 Chaitra Srinivasamurthy
