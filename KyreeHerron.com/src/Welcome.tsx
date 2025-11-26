import PageList from "./PageList";
import "./App.css";
import headshot from "./assets/headshot.jpg";
import tigerLogo from "./assets/Clemson.png";

const Welcome = () => {
  return (
    <div
      className="welcome-fullscreen"
      style={{ "--welcome-bg": `url(${tigerLogo})` } as React.CSSProperties}
    >
      <div className="welcome-content">

        {/* Header Section */}
        <div className="welcome-header">
          <img src={headshot} className="welcome-image" alt="Headshot" />

          <h1 className="welcome-title">
            Welcome to KyreeHerron.com
          </h1>
        </div>

        {/* Page Navigation Tiles */}
        <section className="welcome-list">
          <PageList />
        </section>

      </div>
    </div>
  );
};

export default Welcome;
