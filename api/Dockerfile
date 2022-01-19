FROM node:16-alpine3.14


# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app


# Install dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . ./

# RUN adduser -S runner -u 1001
# USER runner

# Exports
EXPOSE 5000
CMD ["npm", "run", "start"]


# Below here was great for deployment!
# FROM node:16-alpine3.14

# ## We don't want to be using root!
# USER node

# # Use this directory to make sure
# # we can use node and npm with the right perms
# WORKDIR /home/node

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copying source files
# COPY . .

# # RUN adduser -S runner -u 1001
# # USER runner

# # Exports
# EXPOSE 5000
# CMD ["npm", "run", "start"]