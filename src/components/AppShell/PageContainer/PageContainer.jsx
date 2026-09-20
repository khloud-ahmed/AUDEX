import ActiveContext from "../ActiveContext/ActiveContext";
import AppRoutes from "../../../routes/AppRoutes";
import "./PageContainer.css";
function PageContainer() {
  return (
    <div className="page-container">
      <ActiveContext />

      <div className="page-content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default PageContainer;