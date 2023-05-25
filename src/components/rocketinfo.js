function RocketInformation(data) {
  const { rocket } = data;
  return (
    <>
      <div className="grid-item image-item">
        <img src={rocket.flickrimages[0]} alt="space travelers" className="rocket-img" />
      </div>
      <div className="grid-item desc-item">
        <h3>
          {rocket.name}
        </h3>
        <p>
          {rocket.description}
        </p>
      </div>
    </>
  );
}

export default RocketInformation;
