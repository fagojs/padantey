const DashboardItem = ({ item }) => {
  const { name, author, price, page, quality, description } = item;
  return (
    <div className="dashboard-items">
      <span className="name">{name}</span>
      <span className="author">{author}</span>
      <span className="price">{price}</span>
      <span className="page">{page}</span>
      <span className="quality">{quality}</span>
      <span className="descriptionn">{description}</span>
    </div>
  );
};

export default DashboardItem;
