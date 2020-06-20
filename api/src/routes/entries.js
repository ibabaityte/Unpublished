import { Router } from "express";
import EntryController from "../controllers/entries";

const router = Router();

router.post("/entries", EntryController.create);
router.get("/entries", EntryController.list);
router.get("/entries/:id", EntryController.get);
router.put("/entries/:id", EntryController.update);
router.delete("/entries/:id", EntryController.remove);

module.exports = router;