import useFetch from "../useFetch";
import GenerateCard from "./GenerateCard";

const RenderAllEvent = () => {
  const { data, loading, error } = useFetch(
    "https://meet-up-bay.vercel.app//events",
  );
  return (
    <>
      <GenerateCard data={data} loading={loading} error={error} />
    </>
  );
};
export default RenderAllEvent;
