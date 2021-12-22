FROM node:16-alpine3.14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json .
RUN npm install

# Copying source files
COPY . .

# Exports
EXPOSE 5000
CMD [ "npm", "run", "start:dev" ]