function Stripe({ url, num }) {
  return (
    <div className="w-full gap-4 border border-t-2 border-b-2 border-left-2 border-right-2 border-zinc-700 px-4 py-5 flex justify-between items-center ">
      <img src={url} alt="no-img-found" />
      <p className="text-white">{num}</p>
    </div>
  );
}

export default Stripe;
