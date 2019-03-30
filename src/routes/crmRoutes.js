import {
  addNewContact,
  getAllContacts,
  findContact
} from "../controllers/crmController";

const routes = app => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // testing middleware below
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
      // return all contacts
    }, getAllContacts)
    // create a new contact
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    // find specific contact
    .get(findContact)
    .put((req, res) => res.send("PUT worked"))
    .delete((req, res) => res.send("Deleted!"));
};
export default routes;
