FROM node:16-alpine3.14

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install dependencies
COPY package*.json ./
RUN npm install

RUN npm install -g @prisma/cli

# Copying source files
COPY . ./

ENV DATABASE_URL=postgres://yourUser:changeit@postgres:5432/prisma?schema=hello-prisma

# Exports
EXPOSE 5000
CMD ["npm", "run", "start"]