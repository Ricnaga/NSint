const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const { allRoutes } = require('./routes');

nunjucks.configure('src/shared/infra/8080/views', {
  express: server,
  noCache: true,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static('src/shared/infra/8080/public'))
  .use(allRoutes)

  .listen(5500, () => {
    console.log(
      "👀 Server localhost:5500 is being watched - 'Quis custodiet ipsos custodes? 🤔'!",
    );
  });
