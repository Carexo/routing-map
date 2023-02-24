const Spinner = () => {
  return (
    <div className="m-auto h-12 w-12 animate-spin rounded-full border-2 border-x-white border-y-blue">
      <p className="sr-only">loading</p>
    </div>
  );
};

export default Spinner;
