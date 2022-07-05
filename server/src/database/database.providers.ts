import { Sequelize } from 'sequelize-typescript';
import { Cart } from 'src/modules/cart/cart.entity';
import { Ingredients } from 'src/modules/ingredients/ingredients.entity';
import { Orders } from 'src/modules/orders/orders.entity';
import { Size } from 'src/modules/size/size.entity';
import { Users } from 'src/modules/users/users.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../core/constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Users,Ingredients, Size,Cart, Orders]);
      await sequelize.sync();
      // await sequelize.sync({force:true});
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      return sequelize;
    },
  },
];
