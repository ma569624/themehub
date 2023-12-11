import Home from "./home/Home";
import './App.scss';
import { Container } from "react-bootstrap";
import Header from './component/header/Header'

function App() {
  return (
    <>
      <Container fluid>
        <Header />
        <div className="d-flex">
        <div>
          hello
        </div>
        <div>
          <Home />
        </div>
        </div>
      </Container>
    </>
  );
}

export default App;
