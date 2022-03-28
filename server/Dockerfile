FROM node:alpine
WORKDIR /app
COPY package*.json .
COPY ../admin/package*.json ../admin/package*.json
RUN yarn
COPY . .
RUN cd ../admin && yarn && yarn build
COPY ../admin/build /app/build