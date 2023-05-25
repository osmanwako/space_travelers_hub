import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};
const APIURL = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch(APIURL);
    const data = await response.json();
    const missionsData = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }));

    return missionsData;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    JoinMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, canceled: !mission.canceled };
      }
      return mission;
    }),
  },
  extraReducers: {
    [fetchMissions.pending]: () => {
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.missions = action.payload;
    },

  },
});

export const { JoinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
