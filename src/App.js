import Home from "./home/Home";
import './App.scss';
import { Container } from "react-bootstrap";
import Header from './component/header/Header'
import SideNav from "./component/sidenav/SideNav";
import Navtab from "./component/Navtab/Navtab";

function App() {
  return (
    <>

      <Header />
      <div className="d-flex">
        <div>
          <SideNav />
        </div>
        <div className="mx-4 mt-2">
          <Navtab />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
