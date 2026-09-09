import Sidebar from "../components/Sidebar";
import "../App.css"

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        <header className="topbar">
          <h2>Dashboard</h2>
          <span>Admin</span>
        </header>

        <section className="dashboard-content">

          <h1>Welcome to LABSYNC</h1>

          <p>Research Laboratory Management System</p>

          <div className="stats">

            <div className="stat-card">
              <h3>24</h3>
              <p>Researchers</p>
            </div>

            <div className="stat-card">
              <h3>18</h3>
              <p>Equipment</p>
            </div>

            <div className="stat-card">
              <h3>42</h3>
              <p>Experiments</p>
            </div>

            <div className="stat-card">
              <h3>12</h3>
              <p>Projects</p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;
