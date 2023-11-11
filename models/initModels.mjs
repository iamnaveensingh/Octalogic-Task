// models/initModels.mjs
import { sequelize } from './index.mjs';
import CarType from './CarType.mjs';
import BikeType from './BikeType.mjs';
import Vehicle from './Vehicle.mjs';

// Define associations if needed
// For example, if Vehicle belongs to CarType
Vehicle.belongsTo(CarType);

export { CarType, BikeType, Vehicle };
