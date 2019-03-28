const routes = app => {
  app
    .route("/contact")
    .get((req, res) => res.send("GET success!"))
    .post((req, res) => res.send("POST success!"));

  app
    .route("/contact/:contactId")
    .put((req, res) => res.send("PUT worked"))
    .delete((req, res) => res.send("Deleted!"));
};
export default routes;
