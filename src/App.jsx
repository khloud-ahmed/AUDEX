import Sidebar from "./components/AppShell/sidebar/Sidebar";
import Header from "./components/AppShell/Header/Header";
import PageContainer from "./components/AppShell/PageContainer/PageContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="app-content">
        <Header />

        <PageContainer />
      </div>
    </div>
  );
}

export default App;