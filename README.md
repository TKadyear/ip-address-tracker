# Ip Address Tracker from Front End Mentor

This project is a solution to the Frontend Mentor IP Address Tracker Challenge. The goal is to build an IP Address Tracker app that closely matches the provided design, using the [IP Geolocation API by IPify](https://geo.ipify.org/) for IP location data and [LeafletJS](https://leafletjs.com/) for map rendering.

![Design preview for the IP address tracker coding challenge](./docs/design/desktop-preview.jpg)
[Demo](https://tkadyear.github.io/ip-address-tracker/)

## Getting started

### Clone this repository

```bash
# Clone this repository
git clone https://github.com/TKadyear/ip-address-tracker.git

# Go into the repository
cd ip-address-tracker
```

### Run project

> Note: If you want the same configuration with which I have developed this project, you will need to install Docker and download the extension for [devcontainer](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for vscode.

```bash
# Install dependencies
npm ci

# Run the local server
npm run dev

# Lint files
npm run lint

# Build static files
npm run build

# Run the server with static files
npm run preview

# Run unit test
npm run test:unit
```

## Challenge

The users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

## My process

### Built with

- HTML
- CSS
- Vue
- Typescript

### Useful resources
- [Loader CSS](https://css-loaders.com/)
- [Mock turtle](https://mockturtle.net/)
- [Mock Server](https://www.mocks-server.org/docs/integrations/javascript/)

An interesting aspect of my development process for the IP Address Tra was the use of a mock server to simulate API responses. This allowed me to continue building  the application without consuming credits from the actual IP Geolocation API by IPify. By implementing a mock server, I was able to work efficiently and ensure that the app's functionality was intact before integrating the real API, which not only saved resources but also provided a smooth development experience.

## Author

- Github - [Tamara Kadyear | TKadyear](https://github.com/TKadyear)
- Frontend Mentor - [Tamara Kadyear | TKadyear](https://www.frontendmentor.io/profile/TKadyear)
