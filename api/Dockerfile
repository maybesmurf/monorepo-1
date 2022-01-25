# FROM node:16-alpine3.14

# # Create app directory
# RUN mkdir -p /usr/app
# WORKDIR /usr/app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copying source files
# COPY . ./

# ENV DATABASE_URL=postgres://yourUser:changeit@postgres:5432/prisma?schema=hello-prisma

# # Exports
# EXPOSE 5000
# CMD ["npm", "run", "start"]

FROM node:16-alpine3.14 as base

WORKDIR /usr/app

#---------- PRE-REQS ----------
FROM base as prereq

COPY package*.json ./
COPY ./ ./

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=production

#---------- DEVELOPMENT ----------
FROM prereq as development

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=development

## All files will be volume mounted into the container

ENV DATABASE_URL=postgres://yourUser:changeit@postgres:5432/prisma?schema=hello-prisma

EXPOSE 5000
CMD ["npm", "run", "start"]