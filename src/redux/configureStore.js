import { configureStore } from '@reduxjs/toolkit';
import rocketreducer from './rockets/rocketslice';

const Store = configureStore({
  reducer: {
    rocketstore: rocketreducer,
  },
});

export default Store;
