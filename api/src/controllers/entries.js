import Entry from "../models/entry.js";
import {generateSearchConfig} from "../utils/searchUtils.js";

const create = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            code: "400",
            message: "Content can not be empty"
        });
    }

    const newEntry = new Entry({
        title: req.body.title || "Untitled note",
        content: req.body.content,
        authorId: req.decodedToken.userId,
        authorType: req.decodedToken.userType
    });

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

const list = (req, res) => {
    Entry.find({'authorId': req.decodedToken.userId}).sort({'createdAt': req.query.order}).then(data => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(500).send({
            code: "500",
            message: "An error occurred while retrieving your entries"
        });
    });
};

const listSearchEntries = (req, res) => {
    if (req.query.keyword === "" && req.query.startDate === "" && req.query.endDate === "" && req.query.range === "") {
        return res.status(400).send({
            code: "400",
            message: "Search parameters can not be empty."
        });
    }
    Entry.find(generateSearchConfig(req)).then(data => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

const listAllEntries = (req, res) => {
    Entry.find({authorType: "USER"}).then(data => {
        res.status(200).send(data);
        console.log(data);
    }).catch(() => {
        res.status(500).send({
            code: "500",
            message: "An error occurred while retrieving all entries"
        });
    });
};

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

const update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            code: "400",
            message: "Content can not be empty"
        });
    }

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

export default {
    create,
    list,
    listSearchEntries,
    listAllEntries,
    get,
    update,
    remove
};