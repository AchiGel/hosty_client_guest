import type { HotelResponse } from "../types/hotelTypes";
import Amenities from "./main/Amenities";
import QuickAccessSection from "./main/QuickAccessSection";
import RequestButton from "./main/RequestButton";
import WelcomeSection from "./main/WelcomeSection";

const Main = ({ hotelData }: { hotelData: HotelResponse }) => {
  return (
    <main className="flex-1">
      <WelcomeSection hotelName={hotelData.name} />

      <RequestButton />

      <QuickAccessSection quickAccess={hotelData.quickAccess} />

      <Amenities amenities={hotelData.amenities} />
    </main>
  );
};

export default Main;
