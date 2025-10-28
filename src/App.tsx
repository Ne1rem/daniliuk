import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Layout from "./Layout";
import Home from "./page/Home/Home";
import AboutPage from "./page/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <ScrollToTopButton />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
