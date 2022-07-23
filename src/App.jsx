import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/home/userList/UserList"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />



        </Routes>

      </div>
    </Router>
  );
}

export default App;
