import DashboardItem from "./dashboard-item.component.jsx";

const DashboardPreview = ({ data }) => {
  const { title, items } = data;
  return (
    <div className="dashboard-preview">
      <span className="preview-title">{title}</span>

      {items.map((item) => (
        <DashboardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DashboardPreview;
