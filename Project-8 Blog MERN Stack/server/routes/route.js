import express from 'express'
import { signupUser,loginUser,uploadImage,getImage,createPost,getAllposts,getDetail,updatePost,deletepost } from '../controlers/user-controler.js'
import { protect } from '../middleware/jwtauth.js'
import { newComment,allcomments } from '../controlers/comment-controler.js'

const router=express.Router()
router.post('/signup',signupUser)
router.post('/login',loginUser)
router.post('/create',protect,createPost)
router.get('/posts',protect,getAllposts)
router.get('/detail/:id',protect,getDetail)
router.put('/updatepost/:id',protect,updatePost)
router.delete('/delete/:id',protect,deletepost)
router.post('/comment',protect,newComment)
router.get('/allcomments',protect,allcomments)
export default router