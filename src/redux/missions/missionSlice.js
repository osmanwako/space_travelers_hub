import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};
const APIURL = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch(APIURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data, 'fetching data is OK');
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [fetchMissions.pending]: () => {
      console.log('fetching');
    },
    [fetchMissions.fulfilled]: (state, action) => {
      console.log('fetched');
      state.missions = action.payload;
    },

  },
});

export default missionsSlice.reducer;
