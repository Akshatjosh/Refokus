import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const btnText = "Get Started";
  return (
    <div className="mx-auto max-w-screen-xl flex gap-12 justify-between items-center ml-36 p-3  border border-b-[1px] border-zinc-100">
      <div className="flex items-center">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />
        <div className="flex gap-14 ml-12">
          {["Home", "Work", "About", "News", "Careers"].map((elem, index) => (
            <Link
              key={index}
              className="font-regular text-sm flex items-center gap-1 text-white"
              to="#"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.15em green" }}
                  className="inline-block w-1 h-1 bg-green-500 rounded-full"
                ></span>
              )}
              {elem}
            </Link>
          ))}
        </div>
      </div>
      <Button btnText={btnText} />
    </div>
  );
}

export default Navbar;
