const PopularRedeemItem = ({
  image, product_name, points, descriptions,
}) => (
  <div className="card d-flex p-3">
    <img src={image} alt={product_name} />

    <div className="d-flex justify-content-between">
      <strong>{product_name}</strong>
      <p className="text-primary">{points} Point</p>
    </div>

    <p>{descriptions}</p>
  </div>
);

export default PopularRedeemItem;
