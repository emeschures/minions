## Minions API

![](https://i.stack.imgur.com/GmDqj.jpg)

We're going to build a React App that connects to our own API, so we need to review building Restful JSON APIs:

### Build a JSON API using Express and Mongoose

You'll need to create a Minion model with the following schema:

| Key      | Value                                              |
| -------- | -------------------------------------------------- |
| name     | { type: String }                                   |
| imageURL | { type: String, default: " https://goo.gl/u6GHrh"} |

Once you have your minion schema set up and your model built, create the following routes, which will send or receive JSON data (no views, just JSON data):

| Method | Route            | Action  |
| ------ | ---------------- | ------- |
| GET    | /api/minions     | index   |
| POST   | /api/minions     | create  |
| GET    | /api/minions/:id | show    |
| PATCH  | /api/minions/:id | update  |
| DELETE | /api/minions/:id | Destroy |

**Tips:**

- Make sure you have **all** the necessary packages installed before starting to code. Look at your previous express apps if you forget which ones to use.
- Test ALL 5 of your routes in Postman, and make sure they work.