FROM node:16-alpine as base

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY ./ ./

FROM node:16-alpine as production
WORKDIR /home/node/app
COPY --from=base /home/node/app/node_modules ./node_modules
COPY --from=base /home/node/app/package.json ./package.json
COPY --from=base /home/node/app/tsconfig.json ./tsconfig.json
COPY --from=base /home/node/app/src ./src
COPY --from=base /home/node/app/prisma/migrations ./prisma/migrations
COPY --from=base /home/node/app/prisma/schema.prisma ./prisma/schema.prisma

ENV NODE_PATH=./build

RUN npm run build

EXPOSE 5000
CMD ["npx", "prisma", "migrate", "deploy", "&&", "node", "./build/src/index.js" ]