import Entry from "../models/entry";

//Create and save a new entry
const create = (req, res) => {
    //Validate request
    if (!req.body.content) {
        return res.status(400).send({message: "Content can not be empty"});
    }

    //Create an entry
    const newEntry = new Entry({
        title: req.body.title || "Untitled note",
        content: req.body.content,
        author: req.decodedToken.userId,
        authorType: req.decodedToken.userType
    });

    //Save entry in the database
    newEntry.save().then(data => {
        res.status(200).send({message: "all is good", data: data});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating your entry"
        });
    });
};

//Retrieve and return all entries which belong to logged in user from the db
const list = (req, res) => {
    Entry.find({'author': req.decodedToken.userId}).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving your entries"
        });
    });
};

//Retrieve and return all entries from the db for admin
const listAll = (req, res) => {
    Entry.find({authorType: "USER"}).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all entries"
        });
    });
};

//Find a single entry with entryId
const get = (req, res) => {
    Entry.findById(req.params.id).then(entry => {
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
    Entry.findByIdAndUpdate(req.params.id, {
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
    Entry.findByIdAndRemove(req.params.id).then(entry => {
        if (!entry) {
            return res.status(404).send({
                message: "Entry not found with id " + req.params.id
            });
        }
        res.status(200).send(entry);
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
    listAll,
    get,
    update,
    remove
};