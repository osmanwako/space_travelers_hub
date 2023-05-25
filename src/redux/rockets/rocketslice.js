import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  status: 'idle',
  load: Date.now(),
  message: 'Everything is good',
  total: 0,
};
const generaterockets = (lists) => {
  const rockets = lists.map((list) => {
    const {
      id, name, description,
    } = list;
    const flickrimages = list.flickr_images;
    const reserved = false;
    return {
      id, name, description, flickrimages, reserved,
    };
  });
  return rockets;
};
export const fetchRockets = createAsyncThunk('rocketstores/fetchRockets', async () => {
  const response = await axios.get(url);
  const { data } = response;
  return generaterockets(data);
});

export const Rocketslice = createSlice({
  name: 'rocketstore',
  initialState,
  reducers: {
    reservation: (state, action) => {
      const rocket = state.rockets.find((item) => item.id === action.payload);
      if (rocket) {
        rocket.reserved = !rocket.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      const newstate = {
        ...state,
        status: 'pending',
        rockets: [],
      };
      return { ...newstate };
    }).addCase(fetchRockets.fulfilled, (state, action) => {
      const newstate = {
        ...state,
        status: 'fulfilled',
        rockets: action.payload,
      };
      return { ...newstate };
    }).addCase(fetchRockets.rejected, (state, action) => {
      const newstate = {
        ...state,
        status: 'rejected',
        message: action.payload,
        rockets: [],
      };
      return { ...newstate };
    });
  },
});

export const { reservation } = Rocketslice.actions;

export default Rocketslice.reducer;
