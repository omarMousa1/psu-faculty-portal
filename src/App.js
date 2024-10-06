import "./assets/style.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <body>
      <Header />
      <Homepage />
      <Footer />
    </body>
  );
}

export default App;
