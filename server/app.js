var express = require('express');
var path = require('path');

var port = process.env.PORT || 8080;
var indexRouter = require('./routes/index');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', indexRouter);


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

