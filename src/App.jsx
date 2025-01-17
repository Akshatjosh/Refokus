import Cards from "./Components/Cards";
import Marquees from "./Components/Marquees";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Stripes from "./Components/Stripes";
import Work from "./Components/Work";

function App() {
  return (
    <div className="w-screen h-screen bg-zinc-900 font-['AR_One_Sans'] overflow-y-auto">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  );
}

export default App;
