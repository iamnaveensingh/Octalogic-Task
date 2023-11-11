// seed.mjs
import { CarType, BikeType, Vehicle } from './models/index.mjs';

const seedData = async () => {
  await CarType.create({ name: 'Hatchback' });
  await CarType.create({ name: 'SUV' });

  await BikeType.create({ name: 'Cruiser' });

  await Vehicle.create({ name: 'Car1', carTypeId: 1 });
  await Vehicle.create({ name: 'Car2', carTypeId: 1 });
  await Vehicle.create({ name: 'Bike1', bikeTypeId: 1 });
};

seedData();
