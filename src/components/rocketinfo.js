import { useDispatch } from 'react-redux';
import { reservation } from '../redux/rockets/rocketslice';

function RocketInformation(data) {
  const dispatch = useDispatch();

  const { rocket } = data;
  return (
    <>
      <div className="rocket-item rocket-gallery">
        <img src={rocket.flickrimages[0]} alt="space travelers" className="rocket-img" />
      </div>
      <div className="rocket-item rocket-desc">
        <h3>
          {rocket.name}
        </h3>
        <p className="p-desc">
          {rocket.reserved ? <span className="span-badge">Reserved</span> : ''}
          {rocket.description}
          <button type="button" className={rocket.reserved ? 'rbtn-cancel' : 'rbtn-reserve'} onClick={() => dispatch(reservation(rocket.id))}>
            {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </p>
      </div>
    </>
  );
}

export default RocketInformation;
