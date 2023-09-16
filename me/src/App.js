import "./styles/App.css";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Pages/Home";
import Inst from "./components/Pages/Inst";
import Bar from "./components/Pages/Bar";
import Scatter from "./components/Pages/Scatter";
import Line from "./components/Pages/Line";
import Hist from "./components/Pages/Hist";
import Pie from "./components/Pages/Pie";

function App() {
  return (
    <>
      <Router>
          <Nav />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/Instructions" exact Component={Inst} />
            <Route path="/Barchart" exact Component={Bar} />
            <Route path="/ScatterPlot" exact Component={Scatter} />
            <Route path="/LineChart" exact Component={Line} />
            <Route path="/Histogram" exact Component={Hist} />
            <Route path="/Piechart" exact Component={Pie} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
