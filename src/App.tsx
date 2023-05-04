import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const items = data.map((item) => {
    return (
      <>
        <Card {...item} />
        <hr className="divider" />
      </>
    );
  });

  return (
    <>
      <NavBar />
      <div className="card-section">{items}</div>
    </>
  );
}

export default App;
