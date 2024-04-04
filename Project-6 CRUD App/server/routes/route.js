import express from 'express'
import { addUser,getUser,editUser,updateUser,deleteUser} from '../controlers/UserControlers.js';
const router=express.Router()
router.post('/add',addUser);
router.get('/alluser',getUser)
router.get('/:id',editUser)
router.post("/:id", updateUser);
router.delete('/:id',deleteUser);
export default router;