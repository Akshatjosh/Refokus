import { MdArrowRightAlt } from "react-icons/md";

function Card({ width }) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl text-white ${width}`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>heading</h3>
          <MdArrowRightAlt />
        </div>
        <h1 className="text-3xl mt-10 font-medium">Start a project</h1>
      </div>
      <div className="w-full mt-60">
        <h1 className="tracking-tight leading-none text-6xl font-semibold"></h1>
        <button className="rounded-full px-3 py-2 border border-[1px] border-zinc-500 mt-2">
          Contact-us
        </button>
        <p className="text-sm text-zinc-500 font-medium">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}

export default Card;
