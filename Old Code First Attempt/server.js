var connect = require("connect");
var serveStatic = require("serve-static");

connect().use(serveStatic(__dirname)).listen(8888, function(){
  console.log("SERVER IS RUNNING ON PORT 8888");
});


/*
const PORT = process.env.PORT || 8888;

const server = createServer();

server.on("request", (request, response) => {
  const languages = request.headers["accept-language"];
  response.write("HELLO");
  response.write(",");
  response.write("WORLD!");
  response.end(languages);
});

server.listen(PORT, () => {
  console.log("Starting Server at port ${PORT}");
});*/
