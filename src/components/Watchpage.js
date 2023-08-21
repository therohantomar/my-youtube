import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const [searchParams]  = useSearchParams();
  const id=searchParams.get("v")
  
  return (
    <>
      <iframe
        className="xl:w-[62rem] lg:w-[50rem] md:w-[40rem] sm:w-[30rem] xs:h-[15rem] sm:h-[20rem] md:h-[22rem] lg:h-[24rem] xl:h-[29rem] "
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
