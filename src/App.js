import Home from "./home/Home";
import './App.scss';
import { Container } from "react-bootstrap";
import Header from './component/header/Header'
import SideNav from "./component/sidenav/SideNav";

function App() {
  return (
    <>

      <Header />
      <div className="d-flex">
        <div>
          <SideNav />
        </div>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
