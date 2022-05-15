const express = require('express');
const router = express.Router();

const {CreateUser,userLogin} = require("../controller/userController")
const {createBook,getBooks,getBookById,updateBook,deleteBooks}=require("../controller/bookController")
const updatereviewBook = require("../controller/updatedReview")

const {authentication,authorization}  = require("../middleware/authe&Auth");
const { addReview,deleteReview } = require('../controller/reviewController');

//User APIs
router.post("/register",CreateUser)
router.post('/login',userLogin)

//login APIs

router.post("/books",authentication,createBook)
router.get("/books",authentication,getBooks)
router.get("/books/:bookId",authentication,getBookById)
router.put("/books/:bookId",authentication,authorization,updateBook)
router.delete("/books/:bookId",authentication,authorization,deleteBooks)


//Review APIs

router.post("/books/:bookId/review",addReview)
  // router.put("books/:bookId/review/:reviewId", updateReview)
 router.delete('/books/:bookId/review/:reviewId', deleteReview);

 router.put("books/:bookId/review/:reviewId",updatereviewBook.updateReview )
module.exports=router;