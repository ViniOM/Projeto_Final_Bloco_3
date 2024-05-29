import { Link } from "react-router-dom";
import pilulas1 from "../../assets/pilulas1.png";

function Navbar() {
  return (
    <>
      <Link to={"/"}>
        <nav className="flex items-center bg-green-500 p-4 ">
          <img src={pilulas1} alt="pilulas" width={"45px"} className="ml-10" />
          <div className="text-white text-2xl font-bold ml-3">
            <p>Farmácia</p>
          </div>
        </nav>
      </Link>
    </>
  );
}

export default Navbar;
