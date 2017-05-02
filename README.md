# APOLLO REACT SLINGSHOT

This repo is a for of [react-slingshot](https://github.com/coryhouse/react-slingshot) and modified to include an apollo client that is hooked up to the built in redux store. The client is connected to http://localhost:3003. This is where your graphql backend should sit.

There are quite a lot of things baked into this repository as the react-slingshot guys have done a great job of making the front end experience nice and smooth. Make sure you check out their [repo](https://github.com/coryhouse/react-slingshot) to get an idea of what it offers.

In short you can run this repo via

- `npm install`
- `npm start`

or you can spin it up with docker

- `docker run -p 3000:3000 -d apollo-react-slingshot`

I am not going to go into how docker works as their [documentation](https://www.docker.com/) is great. Check it out.

This repo is work in progress. If you have any ideas or thoughts, feel free to ping me.
