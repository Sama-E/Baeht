import createError from "../utils/createError.js";
import HService from "../models/hservice.model.js";

export const createHService = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a service!"));

  const newHService = new HService({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedHService = await newHService.save();
    res.status(201).json(savedHService);
  } catch (err) {
    next(err);
  }
};
export const deleteHService = async (req, res, next) => {
  try {
    const hService = await HService.findById(req.params.id);
    if (hService.userId !== req.userId)
      return next(createError(403, "You can delete only your service!"));

    await HService.findByIdAndDelete(req.params.id);
    res.status(200).send("Service has been deleted!");
  } catch (err) {
    next(err);
  }
};
export const getHService = async (req, res, next) => {
  try {
    const hService = await HService.findById(req.params.id);
    if (!hService) next(createError(404, "Service not found!"));
    res.status(200).send(hService);
  } catch (err) {
    next(err);
  }
};
export const getHServices = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const hService = await HService.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(hService);
  } catch (err) {
    next(err);
  }
};