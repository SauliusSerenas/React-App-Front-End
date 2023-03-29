import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import {Translation} from "react-i18next";

function App() {
    return (
        <Translation>
            {(t, {i18n}) => (
                <div className="App">
                    <Router>
                        <Navbar/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/adduser" element={<AddUser/>}/>
                            <Route path="/edituser/:id" element={<EditUser/>}/>
                            <Route path="/viewuser/:id" element={<ViewUser/>}/>
                        </Routes>
                    </Router>
                </div>
            )}
        </Translation>
    );
}

export default App;