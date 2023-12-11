FROM node:18-alpine as runner
WORKDIR /build-space

COPY . ./
RUN npm i
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]