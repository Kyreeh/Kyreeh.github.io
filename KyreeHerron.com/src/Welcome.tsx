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

      {/* ---------------------- DESKTOP VIEW ---------------------- */}
      <div className="welcome-desktop">
        <div className="welcome-header">
          <img src={headshot} className="welcome-image" alt="Headshot" />
          <h1 className="welcome-title">Welcome to KyreeHerron.com</h1>
        </div>

        <section className="welcome-list">
          <PageList />
        </section>
      </div>

      {/* ----------------------- MOBILE VIEW ----------------------- */}
      <div className="welcome-mobile">
        <img src={headshot} className="welcome-mobile-image" alt="Headshot" />

        <h1 className="welcome-mobile-title">
          Welcome to KyreeHerron.com
        </h1>

        <div className="welcome-mobile-list">
          <PageList />
        </div>
      </div>

    </div>
  );
};

export default Welcome;
