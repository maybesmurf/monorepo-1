# TODO: This guy can probably be optimized.
FROM node:16-alpine as base

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY ./ ./

ENV NODE_PATH=./dist

EXPOSE 5000
CMD [  "node", "./dist/src/index.js"]
