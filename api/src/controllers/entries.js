import Entries from "../models/entry";

//Create and save a new entry
const create = (req, res) => {
    //Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Content can not be empty"
        });
    }

    //Create an entry
    const newEntry = {
        title: req.body.title || "Untitled",
        content: req.body.content,
    };

    //Save entry in the database
    Entries.save(newEntry).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating your entry"
        });
    });
};

//Retrieve and return all entries from the db
const list = (req, res) => {
    Entries.find().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving your entries"
        });
    });
};

//Find a single entry with entryId
const get = (req, res) => {
    Entries.findById(req.params.id).then(entry => {
        if (!entry) {
            return res.status(404).send({
                message: "Entry not found with id" + req.params.id
            });
        }
        res.status(200).send(entry);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Entry not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving entry with id " + req.params.id
        });
    });
};

//Update a note identified by the entryId in the request
const update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Content can not be empty"
        });
    }

    //Find note and update it with the request body
    Entries.findByIdAndUpdate(req.params.id, {
        title: req.body.title || "Untitled",
        content: req.body.content
    }, {new: true}).then(entry => {
        if (!entry) {
            return res.status(404).send({
                message: "Entry not found with id " + req.params.id
            });
        }
        res.status(200).send(entry);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Entry not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating with entry id " + req.params.id
        });
    });
};

//Delete a note with the specified entryId in the request
const remove = (req, res) => {
    Entries.findByIdAndRemove(req.params.id).then(entry => {
        if (!entry) {
            return res.status(404).send({
                message: "Entry not found with id " + req.params.id
            });
        }
        res.status(200).send({message: "Entry deleted successfully"});
    }).catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "Entry not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete your entry with id " + req.params.id
        });
    });
};

module.exports = {
    create,
    list,
    get,
    update,
    remove
};