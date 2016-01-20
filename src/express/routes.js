export default (app) => {
  app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile("index.html", {
      root: "views/"
    }, (err) => {
      if (err) {
        console.log(err);
        res.writeHead(500);
      }
    });
  });
  app.get("*", (req, res) => {
    res.redirect("/#" + req.url);
  });
};
