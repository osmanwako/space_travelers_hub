function RocketInformation(data) {
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
        <p>
          {rocket.description}
          <button type="button" className={rocket.reserved ? 'rbtn-cancel' : 'rbtn-reserve'}>
            {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </p>
      </div>
    </>
  );
}

export default RocketInformation;
