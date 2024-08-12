FROM node:latest

WORKDIR /sprint-2-3-pb-aws-julho-a

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm" , "start" ]
EXPOSE 3001