import { Router } from "express";
import EntryController from "../controllers/entries";

const router = Router();

router.post("/entries", EntryController.create);
router.get("/entries", EntryController.list);
router.get("/entries/:entryId", EntryController.get);
router.put("/notes/:noteId", EntryController.update);
router.delete("/notes/:noteId", EntryController.remove);

module.exports = router;