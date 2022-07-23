import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";
import "./App.css";
import { Helmet } from "react-helmet";

type AppProps = {
  name: string;
};

const App = ({ name }: AppProps) => {
  const homePage = (
    <>
      <Helmet>
        <title>{name} | Home</title>
      </Helmet>
      <Home />
    </>
  );

  const aboutPage = (
    <>
      <Helmet>
        <title>{name} | About</title>
      </Helmet>
      <About />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={homePage} />
        <Route path="/about" element={aboutPage} />
      </Routes>
    </Router>
  );
};

export default App;
