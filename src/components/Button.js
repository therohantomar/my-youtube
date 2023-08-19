const Button = (props) => {
  const name = props.name;
  return (
    <>
      <button className="text-xs py-2 mx-2 flex-grow-1  w-max px-4 bg-gray-200 rounded-xl">
        {name}
      </button>
    </>
  );
};

export default Button;
