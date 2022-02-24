FROM alpine:3.15

RUN apk update && apk add --update nodejs npm
RUN apk add make

WORKDIR /app

RUN npm install -g -y create-react-app && npm install npx -g

EXPOSE 3000

CMD ["npm", "start"]
