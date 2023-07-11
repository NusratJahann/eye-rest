import Timer from "./Pages/Home/Timer/Timer";
import "./app.css";

function App() {
  return (
      <div>
        <Timer minutes={12} seconds={0} ></Timer>
      </div>
  );
}

export default App;
