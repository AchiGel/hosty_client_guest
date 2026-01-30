import QuickAccess from "./main/QuickAccess";
import RequestButton from "./main/RequestButton";
import WelcomeSection from "./main/WelcomeSection";

const Main = () => {
  return (
    <main className="flex-1">
      <WelcomeSection />

      <RequestButton />

      <QuickAccess />
    </main>
  );
};

export default Main;
