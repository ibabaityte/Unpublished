import {Router} from "express";
import UsersController from "../controllers/users";
import checkAuth from "../middleware/check.auth";

const router = Router();

router.post("/auth", UsersController.auth);
router.post("/register", UsersController.register);
router.get("/:userId", checkAuth, UsersController.get);
router.delete("/:userId", checkAuth, UsersController.remove);
router.get("/:userId/logout",checkAuth, UsersController.logout);
// TODO Create init endpoint
router.get("/init", UsersController.init);

module.exports = router;