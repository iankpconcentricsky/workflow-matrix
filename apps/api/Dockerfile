FROM node:16-alpine as nx-monorepo

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY --chown=node:node . .

# npm ci is install for CI
# npm prune removes devDependencies after using them in build
RUN npm ci && npx nx run api:build && npm prune --production

# ---

FROM node:16-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=nx-monorepo /home/node/package* ./
COPY --from=nx-monorepo /home/node/dist/apps/api ./
COPY --from=nx-monorepo /home/node/node_modules/ ./node_modules/

CMD ["node", "main.js"]

EXPOSE 3333
