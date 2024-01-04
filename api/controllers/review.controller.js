import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import HService from "../models/hservice.model.js";


// Create Review
export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers can't create a review!"));

  const newReview = new Review({
    userId: req.userId,
    hServiceId: req.body.hServiceId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      hServiceId: req.body.hServiceId,
      userId: req.userId,
    });

    if (review)
      return next(
        createError(403, "You have already created a review for this service!")
      );

    //TODO: check if the user purchased the service.

    const savedReview = await newReview.save();

    await HService.findByIdAndUpdate(req.body.hServiceId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

// Get Reviews
export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ hServiceId: req.params.hServiceId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

// Delete Review
export const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};