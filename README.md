## Description

STEPS TO RUN
The app uses ports 3000 and 3001. Make sure these are free before starting.

1) cd server && yarn install
2) cd client && yarn install
3) In the root directory run - yarn install && yarn start

In case you see the client code underlined in red due to this error - "Cannot use JSX unless the '--jsx' flag is provided"  -
"jsx": "react-jsx" to "jsx": "react" in tsConfig file.

Node version used - v16.3.0
For database MongoDb Atlas is used.
