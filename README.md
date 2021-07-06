# Career Foundry Calendar

## Features
Have tried implementing all of the requierd features

## Installation

Clone the repo, install the dependencies and start the server.

```sh
cd cf-calendar
npm i
npm start
```

This will run the react application and json-server at the same time


## React/JS Libraries

Kept the application simple, while making sure that it works according to the instructions.

| Library/Plugin | Reason for Use |
| ------ | ------ |
| Material UI |  It's highly customizable, and have great documentation |
| React Router | It is the most popular choice for routing and is easy to implement |
| Date-fns | It provided a very good support to handle date and time, and more advanced options like handling different time zones |
| JSON-Server |  For mock data |

## API Requirements

Mainly two APIs are required. Although here I use three because I am using flat structure of my JSON file.

| API | Purpose |
| ------ | ------ |
| GET mentor/:id/bookings |  To fetch the mentor and relevant booking dates. It could be fetched month wise as well for better performace |
| POST mentor/:id/booking | Create a new booking. Taking different paramters from input form |

## License

MIT

