// models/BikeType.mjs
import Sequelize from 'sequelize';
import { sequelize } from './index.mjs';

const BikeType = sequelize.define('BikeType', {
  name: Sequelize.STRING,
});

export default BikeType;
