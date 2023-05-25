import { configureStore } from '@reduxjs/toolkit';
import rocketreducer from './rockets/rocketslice';
import missionSlice from './missions/missionSlice';

const Store = configureStore({
  reducer: {
    rocketstore: rocketreducer,
    mission: missionSlice,
  },
});

export default Store;
