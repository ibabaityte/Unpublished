import {Router} from "express";
import UsersController from "../controllers/users";

const router = Router();

router.post('/auth', UsersController.auth);
router.post('/register', UsersController.register);

module.exports = router;