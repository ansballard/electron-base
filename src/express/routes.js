export default (app) => {
  app.get("/", (req, res) => {
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
