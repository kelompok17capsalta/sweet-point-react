const StoreTabItem = ({
  img, name, description, ...props
}) => (
  <div {...props}>
    <div className="card p-2 d-flex flex-column align-items-center">
      <img src={img} alt={name} height={60} />
      <span className="h4 text-center mt-2">{name}</span>
      <span className="h6 text-center text-primary">{description}</span>
    </div>
  </div>
);

export default StoreTabItem;
