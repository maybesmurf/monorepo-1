FROM node:16 as base

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY ./ ./

FROM base as production
WORKDIR /home/node/app

ENV NODE_PATH=./build

RUN npm run build

COPY --from=base /home/node/app/prisma ./

EXPOSE 5000
CMD [ "prisma", "migrate", "deploy", "&&", "node", "./build/src/index.js" ]