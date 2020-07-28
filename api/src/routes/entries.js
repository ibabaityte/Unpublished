import { Router } from "express";
import EntryController from "../controllers/entries";

const router = Router();

router.post("/:userId/entries", EntryController.create);
router.get("/:userId/entries", EntryController.list);
router.get("/:userId/entries/:id", EntryController.get);
router.put("/:userId/entries/:id", EntryController.update);
router.delete("/userId/entries/:id", EntryController.remove);

module.exports = router;