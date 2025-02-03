import Header from "../components/Header";
import Footer from "../components/Footer";
import GenerateCard from "../components/GenerateCard";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const SearchDetails = () => {
  const searchQuery = useParams();
  //console.log(searchQuery);
  const { data, loading, error } = useFetch(
    `meet-up-bay.vercel.app/events/search/${searchQuery.searchQuery}`,
  );
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2>Showing Searching Result...</h2>
        <div className="row">
          <GenerateCard data={data} loading={loading} error={error} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SearchDetails;
