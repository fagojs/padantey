import DashboardItem from "./dashboard-item.component.jsx";

import "./dashboard-preview.css";
const DashboardPreview = ({ data }) => {
  const { title, items } = data;
  return (
    <div className="dashboard-preview">
      <span className="preview-title">{title}</span>
      <div className="preview-items">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <DashboardItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default DashboardPreview;
