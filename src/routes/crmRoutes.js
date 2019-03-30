import { addNewContact } from "../controllers/crmController";

const routes = app => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("GET works!");
      }
    )

    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .put((req, res) => res.send("PUT worked"))
    .delete((req, res) => res.send("Deleted!"));
};
export default routes;
