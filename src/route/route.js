const express = require('express');
const router = express.Router();

const {CreateUser,userLogin} = require("../controller/userController")
const {createBook,getBooks,getBookById,updateBook,deleteBooks}=require("../controller/bookController")


const {authentication,authorization}  = require("../middleware/authe&Auth");
const reviewController = require('../controller/reviewController');

//User APIs
router.post("/register",CreateUser)
router.post('/login',userLogin)

//login APIs

router.post("/books",authentication,bookController.createBook)
router.get("/books",authentication,bookController.getBooks)
router.get("/books/:bookId",authentication,bookController.getBookById)
router.put("/books/:bookId",authentication,authorization,bookController.updateBook)
router.delete("/books/:bookId",authentication,bookController.deleteBooks)
router.delete("/books/:bookId",authentication,authorization,bookController.deleteBooks)


//Review APIs

router.post("/books/:bookId/review",reviewController.addReview)
  router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
 router.delete('/books/:bookId/review/:reviewId',reviewController.deleteReview);

module.exports=router;