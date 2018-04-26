var express = require("express");
var argv = require("optimist").argv;

var port;
if (argv.p && typeof argv.p == "number") {
  console.log("port = " + argv.p);
  port = argv.p
}
else {
  // exit
  console.log("Must especify a port via the -p option");
  process.exit(1);
}

var app = express();
app.set("port", port);

app.get("/", function(req, res){
  console.log("Processing request...");
  res.json({
    message: "I am a loadbalanced nodejs app."
  });
});

app.listen(port, function(){
  console.log("listening on port " + port + " ...");
});
