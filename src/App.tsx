import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="max-w-4xl flex flex-col mx-auto min-h-screen px-6 bg-[#F6F7F9]">
      {/* Header */}
      <Header />

      {/* Main */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
