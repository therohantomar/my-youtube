import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const [searchParams]  = useSearchParams();
  const id=searchParams.get("v")
  
  return (
    <>
      <iframe

        width="850"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        allowTransparency
        autoPlay
      ></iframe>
    </>
  );
};

export default Watchpage;
