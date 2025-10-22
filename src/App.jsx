import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Layout from "./Layout";
import Home from "./sections/Home/Home";

function App() {
  return (
    <Layout>
      <Home />
      <ScrollToTopButton />
    </Layout>
  );
}

export default App;
