import useFetch from "../useFetch";
import GenerateCard from "./GenerateCard";

const RendereventByType = ({ eventType }) => {
  const { data, loading, error } = useFetch(
    `https://meet-up-bay.vercel.app//events/type/${eventType}`,
  );
  //console.log(data);
  //console.log("-> ",eventType);
  return (
    <>
      <GenerateCard data={data} />
    </>
  );
};
export default RendereventByType;
