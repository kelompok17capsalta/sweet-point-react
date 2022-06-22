const PopularRedeemItem = ({img, name, point, description}) => (
  <div className="card d-flex p-3">
    <img src={img} alt={name} />

    <div className="d-flex justify-content-between">
      <strong>{name}</strong>
      <p className="text-primary">{point} Point</p>
    </div>

    <p>{description}</p>
  </div>
);

export default PopularRedeemItem;
