import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

const MissionsList = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.mission);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Table striped bordered size="lg" className="container my-3" responsive="lg">
      <thead>
        <tr>
          <th style={{ backgroundColor: '#f8f9fa' }}>Mission</th>
          <th style={{ backgroundColor: '#f8f9fa' }}>Description</th>
          <th style={{ backgroundColor: '#f8f9fa', width: '12%' }}>Status</th>
          <th style={{ backgroundColor: '#f8f9fa', width: '12%' }}> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>
              {!mission.canceled ? (
                <div className="btns d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    NOT A MEMBER
                  </button>
                </div>
              ) : (
                <div className="btns justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn btn-info text-white"
                    aria-label="Active member"
                  >
                    Active Member
                  </button>
                </div>
              )}
            </td>
            <td>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm d-flex justify-content-center"
                onClick={() => dispatch(fetchMissions(mission.id))}
              >
                {!mission.canceled ? 'Join Mission' : 'Leave Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsList;
