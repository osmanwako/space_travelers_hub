import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  status: 'idle',
  load: Date.now(),
  message: 'Everything is good',
  total: 0,
};
const generatemissions = (lists) => {
  const missions = lists.map((list) => {
    const id = list.mission_id;
    const name = list.mission_name;
    const { description } = list;
    const member = false;
    return {
      id, name, description, member,
    };
  });
  return missions;
};
export const fetchMissions = createAsyncThunk('missionstores/fetchMissions', async () => {
  const response = await axios.get(url);
  const { data } = response;
  return generatemissions(data);
});

export const Missionslice = createSlice({
  name: 'missionstore',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find((item) => item.id === action.payload);
      if (mission) {
        mission.member = !mission.member;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      const newstate = {
        ...state,
        status: 'pending',
        missions: [],
      };
      return { ...newstate };
    }).addCase(fetchMissions.fulfilled, (state, action) => {
      const newstate = {
        ...state,
        status: 'fulfilled',
        missions: action.payload,
      };
      return { ...newstate };
    }).addCase(fetchMissions.rejected, (state, action) => {
      const newstate = {
        ...state,
        status: 'rejected',
        message: action.payload,
        missions: [],
      };
      return { ...newstate };
    });
  },
});
export const { joinMission } = Missionslice.actions;
export default Missionslice.reducer;
