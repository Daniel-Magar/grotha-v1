import LandingPage from "./components/1_landing/LandingPage";
import Header from "./components/globalComponents/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./components/3_aboutUs/AboutPage";
import OurStoryPage from "./components/2_ourStory/OurStoryPage";
import JoinGrothaaPage from "./components/4_joinGrothaa/JoinGrothaaPage";

function App() {
  return (
    <div className="relative cursor-default">
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/about-us" element={<AboutPage />}></Route>
          <Route exact path="/our-story" element={<OurStoryPage />}></Route>
          <Route
            exact
            path="/join-grothaa"
            element={<JoinGrothaaPage />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
