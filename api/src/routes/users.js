import {Router} from "express";
import UsersController from "../controllers/users.js";
import checkAuth from "../middleware/check.auth.js";
import checkAdmin from "../middleware/check.admin.js"

const router = Router();

router.post("/auth", UsersController.auth);
router.post("/register", UsersController.register);
router.get("/:userId", checkAuth, UsersController.get);
router.delete("/:userId", checkAuth, UsersController.remove);
router.get("/:userId/logout", checkAuth, UsersController.logout);
router.get("/admin/init", UsersController.init);
router.get("/admin/allUsers", checkAdmin, UsersController.listAllUsers)

export default router;