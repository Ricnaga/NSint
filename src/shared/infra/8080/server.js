const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const PORT = 3000;

const { allRoutes } = require('./routes');

nunjucks.configure('src/shared/infra/8080/views', {
  express: server,
  noCache: true,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static('src/shared/infra/8080/public'))
  .use(allRoutes)

  .listen(PORT, () => {
    console.log(
      `👀 Server localhost:${PORT} is being watched - 'Quis custodiet ipsos custodes? 🤔'!`,
    );
  });
