import {Router} from "express";
import UsersController from "../controllers/users";

const router = Router();

// router.post('/auth', UsersController.authenticate);
router.post('/register', UsersController.register);
router.get("/:userId", UsersController.get);
router.delete("/:userId", UsersController.remove);

module.exports = router;