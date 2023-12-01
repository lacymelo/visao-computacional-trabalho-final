import { Router } from "express";
import multerConfig from "../config/multer";
import multer from "multer"
import { CreateUserController } from "../modules/users/CreateUser/CreateUserController";
import { UserListController } from "../modules/users/UserList/UserListController";

const userRoutes = Router()
const upload = multer(multerConfig)

const createUserController = new CreateUserController()
const userListController = new UserListController()

userRoutes.post('/user/create', upload.single('avatar_url'), createUserController.handle)
userRoutes.get('/user/list', userListController.handle)

export { userRoutes }