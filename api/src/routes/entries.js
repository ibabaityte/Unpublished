module.exports = (api) => {

    const entries = require("../controllers/entries.js");

    //create a new entry
    api.post("/entries", entries.create);

    //Retrieve all entries
    //error: unresolved variable findAll. Is 'find' the same..?
    api.get("/entries", entries.find);

    //Retrieve a single entry with entryId
    api.get("/entries/:entryId", entries.findOne);

    //Update an entry with entryId
    api.put("/notes/:noteId", entries.update);

    //Delete an entry with entryId
    api.delete("/notes/:noteId", entries.delete);
};