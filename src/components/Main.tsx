import LateCheckOut from "./main/LateCheckOut";
import QuickAccess from "./main/QuickAccess";
import RequestButton from "./main/RequestButton";
import WelcomeSection from "./main/WelcomeSection";

const Main = () => {
  return (
    <main className="flex-1">
      <WelcomeSection />

      <RequestButton />

      <QuickAccess />

      <LateCheckOut />
    </main>
  );
};

export default Main;
