import { Router } from "express";
import EntryController from "../controllers/entries";
import checkAuth from "../middleware/check.auth";
import checkAdmin from "../middleware/check.admin";

const router = Router()

router.post("/entries", checkAuth, EntryController.create);
router.get("/entries", checkAuth, EntryController.list);
router.get("/entries/:id", checkAuth, EntryController.get);
router.put("/entries/:id", checkAuth, EntryController.update);
router.delete("/entries/:id", checkAuth, EntryController.remove);

router.get("/admin/allEntries", checkAdmin, EntryController.listAll);

module.exports = router;