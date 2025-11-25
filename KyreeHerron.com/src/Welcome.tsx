import PageList from "./PageList";
import "./App.css";
import headshot from "./assets/headshot.jpg"; // Ensure you placed this file here
import tigerLogo from "./assets/Clemson.png"; // or .jpg, .svg, etc.


const Welcome = () => {
  return (
    <div className="welcome-fullscreen" style={{ "--welcome-bg": `url(${tigerLogo})` } as React.CSSProperties}>
      
      <div className="welcome-content">

        <div className="welcome-header">
          <img src={headshot} className="welcome-image" />
          <h1 className="welcome-title">Welcome to KyreeHerron.com</h1>
        </div>

        <section className="welcome-list">
          <PageList />
        </section>

      </div>
    </div>
  );
};
export default Welcome;
