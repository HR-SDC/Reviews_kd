const router = require('express').Router();
const dbHelpers = require('../database/dbHelpers');

// GET /reviews/
router.get('/reviews/:productId/:count', dbHelpers.reviews.getReviews);

// GET /reviews/meta

// POST /reviews

// PUT /reviews/:review_id/helpful
router.put('/reviews/:reviewId/helpful', dbHelpers.reviews.updateHelpfulReview);

// PUT /reviews/:review_id/report
router.put('/reviews/:reviewId/report', dbHelpers.reviews.reportReview);

module.exports = router;
