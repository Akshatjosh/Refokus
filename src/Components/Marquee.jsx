function Marquee({ img }) {
  return (
    <div className="flex justify-center items-center gap-4 overflow-x-hidden">
      {img.map((elem, index) => (
        <img src={elem} alt="no-img-found" className="w-32 h-32" key={index} />
      ))}
      {img.map((elem, index) => (
        <img
          src={elem}
          alt="no-img-found"
          className="w-32 h-32"
          key={index + img.length}
        />
      ))}
    </div>
  );
}

export default Marquee;
