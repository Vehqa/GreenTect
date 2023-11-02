import './styles/App.scss';
import './styles/Library.scss';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
