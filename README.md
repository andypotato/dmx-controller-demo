# OpenDMX controller demo

A (very) simple Node.js App showing how to control an RGB light via an Enttec OpenDMX USB (or compatible) dongle.

Note that this is just a quick and dirty implementation which can serve as a base for your own projects. Please DO NOT use this in any production environment.

I have published a detailed article on [how to build and wire a DMX lighting controller for use with Node.js](https://medium.com/@andreas.schallwig) along with this repository.

## Building the application
- Clone or download this repository
- Install dependencies via `npm i`
- Build with `npm run electron:build`

You will find the resulting binary in the `dist_electron` folder.

## Configuration options

You can modify the driver, serial port and DMX start address in `src/config.js`. For available drivers please refer to [node-dmx library documentation](https://github.com/node-dmx/dmx).
