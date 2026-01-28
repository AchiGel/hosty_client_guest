import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen px-6 bg-[#F6F7F9]">
      <div className="sticky top-0 z-50 bg-[#F6F7F9]">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
