import Main from "../components/Main";
import { useHotelQuery } from "../hooks/useHotelQuery";

const Home = () => {
  const { data, isLoading, error } = useHotelQuery();

  if (isLoading)
    return (
      <div className="flex-1 flex justify-center items-center">Loading...</div>
    );
  if (error) return <div>Error</div>;
  if (!data) return <div>No data available</div>;
  console.log(data);
  return <Main hotelData={data} />;
};

export default Home;
