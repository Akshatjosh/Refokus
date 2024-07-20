import { FaLongArrowAltRight } from "react-icons/fa";
function Button({ btnText }) {
  return (
    <button className="min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full  flex items-center justify-between mr-6">
      <span className="font-medium text-sm">{btnText}</span>{" "}
      <FaLongArrowAltRight />
    </button>
  );
}

export default Button;
