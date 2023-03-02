import { Outlet } from "react-router-dom";
import "./App.scss";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = (): JSX.Element => (
  <div id="App">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default App;
