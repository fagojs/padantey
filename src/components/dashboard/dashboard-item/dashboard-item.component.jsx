import "./dashboard-item.css";

const DashboardItem = ({ item }) => {
  const { name, author, price, page, quality, description } = item;
  return (
    <div className="dashboard-items">
      <div className="item-header">
        <span className="name">Name: {name}</span>

        <span className="author">Author: {author}</span>

        <span className="description">{description}</span>

        <span className="quality">Quality: {quality}</span>
      </div>
      <div className="item-footer">
        <span className="page">Page:{page}</span>
        <span className="price">Rs.{price}</span>
      </div>
    </div>
  );
};

export default DashboardItem;
