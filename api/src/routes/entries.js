import {Router} from "express";
import EntryController from "../controllers/entries.js";
import checkAuth from "../middleware/check.auth.js";
import checkAdmin from "../middleware/check.admin.js";

const router = Router()

router.post("/entries", checkAuth, EntryController.create);
router.get("/entries", checkAuth, EntryController.list);
router.get("/entries/search", checkAuth, EntryController.listSearchEntries);
router.get("/entries/:id", checkAuth, EntryController.get);
router.put("/entries/:id", checkAuth, EntryController.update);
router.delete("/entries/:id", checkAuth, EntryController.remove);

router.get("/admin/allEntries", checkAdmin, EntryController.listAllEntries);

export default router;