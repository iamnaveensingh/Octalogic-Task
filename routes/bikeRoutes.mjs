// routes/bikeRoutes.mjs
import express from 'express';
import { BikeType, Vehicle } from '../models/initModels.mjs';

const router = express.Router();

router.get('/bikes', async (req, res) => {
  try {
    const bikes = await BikeType.findAll({
      include: [{ model: Vehicle, attributes: ['name'] }],
    });
    res.json(bikes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
