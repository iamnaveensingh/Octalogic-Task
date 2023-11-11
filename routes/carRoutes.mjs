// routes/carRoutes.mjs
import express from 'express';
import { CarType, Vehicle } from '../models/initModels.mjs';

const router = express.Router();

router.get('/cars', async (req, res) => {
  try {
    const cars = await CarType.findAll({
      include: [{ model: Vehicle, attributes: ['name'] }],
    });
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
