import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';
import style from './missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.mission);
  console.log(missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch, missions]);
  return (
    <div className="mission-container">
      <table className={style.table}>
        <thead>
          <tr className={style.row}>
            <th className={style.column}>Mission</th>
            <th className={style.column}>Description</th>
            <th className={style.column}>Status</th>
            <th className={style.column}>{' '}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Missions;
