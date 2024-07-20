import Button from "./Button";

function Product({ title, desc, url, btnText, live }) {
  return (
    <div className="w-full flex items-center justify-between gap-32 p-4 mr-4 text-white hover:bg-purple-800">
      <div className="flex justify-start items-center gap-24">
        <h1 className="text-6xl uppercase font-semibold">{title}</h1>
        {live && (
          <video src={url} autoPlay muted loop className="w-52 h-52"></video>
        )}
      </div>

      <div className="w-1/3">
        <p className="mb-4">{desc}</p>
        <Button btnText={btnText} />
      </div>
    </div>
  );
}

export default Product;
