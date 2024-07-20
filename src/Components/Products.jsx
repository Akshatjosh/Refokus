import Product from "./Product";

function Products() {
  const data = [
    {
      title: "arqitel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, temporibus aliquid dolore odio corporis accusamus.",
      url: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      btnText: "Visit Website",
      live: false,
    },
    {
      title: "cula",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolore veritatis natus dolor, ut quaerat.",
      url: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      btnText: "Visit Website",
      live: false,
    },
    {
      title: "webflow",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint inventore eos provident quo accusantium!",
      url: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
      btnText: "Visit Website",
      live: false,
    },
    {
      title: "refokus",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita facilis, consectetur neque velit debitis.",
      url: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
      btnText: "Visit Website",
      live: false,
    },
    {
      title: "maniv",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium inventore culpa enim veniam impedit?",
      url: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
      btnText: "Visit Website",
      live: false,
    },
    {
      title: "silvr",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt sunt blanditiis aperiam sit esse provident.",
      url: "https://cdn.refokus.com/website/2022/videos/Silvr.webm",
      btnText: "Visit Website",
      live: false,
    },
  ];
  return (
    <div className="w-full  bg-inherit">
      {data.map((elem, index) => (
        <Product
          key={index}
          title={elem.title}
          desc={elem.desc}
          url={elem.url}
          btnText={elem.btnText}
          live={elem.live}
        />
      ))}
    </div>
  );
}

export default Products;
