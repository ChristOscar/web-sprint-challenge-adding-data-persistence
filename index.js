const server = require('./api/server.js');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Hey Chief, We are listening on port ${PORT}...`); //env.port = 6060 
});

