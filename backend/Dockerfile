FROM node

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 55771

CMD ["npm", "start"]
