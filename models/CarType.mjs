// models/CarType.mjs
import { sequelize } from './index.mjs'; // Adjust the path accordingly
import Sequelize from 'sequelize';

const CarType = sequelize.define('CarType', {
  name: Sequelize.STRING,
});

export default CarType;
