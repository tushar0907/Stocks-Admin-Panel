import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />

      </div>
    </div>
  );
}

export default App;
