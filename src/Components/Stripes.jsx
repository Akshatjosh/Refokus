import Stripe from "./Stripe";

function Stripes() {
  let datas = [
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      num: 52,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      num: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      num: 15,
    },
  ];
  return (
    <div className="flex   w-full justify-evenly items-center mt-10">
      {datas.map((data, index) => (
        <Stripe key={index} url={data.url} num={data.num} />
      ))}
    </div>
  );
}

export default Stripes;
