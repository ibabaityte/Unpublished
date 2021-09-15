import Entry from "../models/entry";
import {generateSearchConfig} from "../utils/searchUtils";

//Create and save a new entry
const create = (req, res) => {
    console.log(req);
    //Validate request
    if (!req.body.content) {
        return res.status(400).send({
            code: "400",
            message: "Content can not be empty"
        });
    }

    //Create an entry
    const newEntry = new Entry({
        title: req.body.title || "Untitled note",
        content: req.body.content,
        authorId: req.decodedToken.userId,
        authorType: req.decodedToken.userType
    });

    //Save entry in the database
    newEntry.save().then(data => {
        res.status(200).send({
            code: "200",
            message: "New entry is created successfully",
            data: data
        });
    }).catch(err => {
        res.status(500).send({
            code: "500",
            message: err.message || "Some error occurred while creating your entry"
        });
    });
};

//Retrieve and return all entries which belong to logged in user from the db
const list = (req, res) => {
    Entry.find({'authorId': req.decodedToken.userId}).then(data => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(500).send({
            code: "500",
            message: "An error occurred while retrieving your entries"
        });
    });
};

//Retrieve and return all entries that match the search query
const listSearchEntries = (req, res) => {
    Entry.find(generateSearchConfig(req)).then(data => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(500).send({
            code: "500",
            message: "There is no such entry"
        });
    });
};

//Retrieve and return all entries from the db for admin
const listAllEntries = (req, res) => {
    Entry.find({authorType: "USER"}).then(data => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(500).send({
            code: "500",
            message: "An error occurred while retrieving all entries"
        });
    });
};

//Find a single entry with entryId
const get = (req, res) => {
    Entry.findById(req.params.id).then(entry => {
        if (!entry) {
            return res.status(404).send({
                code: "404",
                message: "Entry not found with id" + req.params.id
            });
        }
        res.status(200).send(entry);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                code: "404",
                message: "Entry not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Error retrieving entry with id " + req.params.id
        });
    });
};

//Update a note identified by the entryId in the request
const update = (req, res) => {
    // validating
    if (!req.body.content) {
        return res.status(400).send({
            code: "400",
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
                code: "404",
                message: "Entry not found with id " + req.params.id
            });
        }
        res.status(200).send({
            code: "200",
            message: "Entry updated successfully",
            data: entry
        });
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                code: "404",
                message: "Entry not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Some error occurred while updating your entry"
        });
    });
};

//Delete a note with the specified entryId in the request
const remove = (req, res) => {
    Entry.findByIdAndRemove(req.params.id).then(entry => {
        if (!entry) {
            return res.status(404).send({
                code: "404",
                message: "Entry not found with id " + req.params.id
            });
        }
        res.status(200).send(entry);
    }).catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                code: "404",
                message: "Entry not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Could not delete this entry"
        });
    });
};

module.exports = {
    create,
    list,
    listSearchEntries,
    listAllEntries,
    get,
    update,
    remove
};