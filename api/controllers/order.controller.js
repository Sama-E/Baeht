import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import HService from "../models/hservice.model.js";
import Stripe from "stripe";

// Intent
export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);

  const hService = await HService.findById(req.params.id);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: hService.price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = new Order({
    hServiceId: hService._id,
    img: hService.cover,
    title: hService.title,
    buyerId: req.userId,
    sellerId: hService.userId,
    price: hService.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

// Get Orders
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};

// Confirm Order
export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};