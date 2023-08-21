const ShimmerCard = () => {
  return (
    <div className="w-80  cursor-pointer flex  flex-col gap-4 h-max">
      <div className="w-full h-48 bg-gray-300 rounded-md animate-pulse"></div>
      <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
      <div className="w-3/12 h-5 bg-gray-300 rounded-md animate"></div>
    </div>
  );
};

export default ShimmerCard;
