const express = require('express');
const router = express.Router();

const {createUser,userLogin} = require("../controller/userController")
const {createBook,getBooks,getBookById,updateBook,deleteBooks} = require('../controller/bookController')
const {authentication,authorization}  = require("../middleware/authe&Auth");
const reviewController = require('../controller/reviewController');

//User APIs
router.post("/register",createUser)
router.post('/login',userLogin)

//Book APIs
router.post("/books",authentication,createBook)
router.get("/books",authentication,getBooks)
router.get("/books/:bookId",authentication,getBookById)
router.put("/books/:bookId",authentication,authorization,updateBook)
router.delete("/books/:bookId",authentication,authorization,deleteBooks)

//Review APIs
router.post("/books/:bookId/review",reviewController.addReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
router.delete('/books/:bookId/review/:reviewId',reviewController.deleteReview);

module.exports=router;