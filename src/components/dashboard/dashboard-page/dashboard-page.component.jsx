import DashboardPreview from "../dashboard-preview/dashboard-preview.component";

import DASH_DATA from "../../../assets/dashboard-data";

import "./dashboard-page.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {DASH_DATA.map((data) => (
        <DashboardPreview key={data.id} data={data} />
      ))}
    </div>
  );
};

export default DashboardPage;
