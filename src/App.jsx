import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import CustomCarousel from "./CustomCarousel";
import Login from "./components/Login";
import Home from "./components/Home";
import Router from "./Router";

function App() {
  return (
    <Container>
      
      <Router/>
    </Container>
  );
}

export default App;
