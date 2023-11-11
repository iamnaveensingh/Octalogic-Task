// routes/index.mjs
import express from 'express';
import carRoutes from './carRoutes.mjs';
import bikeRoutes from './bikeRoutes.mjs';
import bookingRoutes from './bookingRoutes.mjs';

const router = express.Router();

router.use('/', carRoutes);
router.use('/', bikeRoutes);
router.use('/', bookingRoutes);

export default router;
