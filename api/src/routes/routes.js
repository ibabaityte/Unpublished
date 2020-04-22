module.exports = (app) => {

    const entries = require("../controllers/entries/controller.js");

    //create a new entry
    app.post("/entries", entries.create);

    //Retrieve all entries]
    //error: unresolved variable findAll. Is 'find' the same..?
    app.get("/entries", entries.find);

    //Retrieve a single entry with entryId
    app.get("/entries/:entryId", entries.findOne);

    //Update an entry with entryId
    app.put("/notes/:noteId", entries.update);

    //Delete an entry with entryId
    app.delete("/notes/:noteId", entries.delete);
}