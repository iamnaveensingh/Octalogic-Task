// models/Vehicle.mjs
import Sequelize from 'sequelize';
import { sequelize } from './index.mjs';

const Vehicle = sequelize.define('Vehicle', {
  name: Sequelize.STRING,
});

export default Vehicle;
