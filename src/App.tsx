import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen px-6 bg-[#F6F7F9]">
      <div className="sticky top-0 z-50 bg-[#F6F7F9]">
        <Header />
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "white",
            fontSize: "13px",
            fontWeight: 600,
            color: "black",
          },
        }}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
