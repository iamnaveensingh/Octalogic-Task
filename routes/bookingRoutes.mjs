// routes/bookingRoutes.mjs
import express from 'express';
import { Vehicle } from '../models/initModels.mjs';
import { check, validationResult } from 'express-validator';

const router = express.Router();

router.post('/booking', async (req, res) => {
  try {
    // Validation example
    check('vehicleId').isInt().run(req);
    check('bookingDate').isISO8601().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // Check for overlapping bookings
    const { vehicleId, bookingDate } = req.body;
    const existingBooking = await Vehicle.findOne({
      where: { id: vehicleId, bookingDate },
    });

    if (existingBooking) {
      return res.status(409).json({ message: 'Booking date overlaps with an existing booking' });
    }

    // Create booking
    await Vehicle.update({ bookingDate }, { where: { id: vehicleId } });

    res.json({ message: 'Booking successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
