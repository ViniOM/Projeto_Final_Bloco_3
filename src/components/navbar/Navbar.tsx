import { Link } from "react-router-dom";
import pilulas1 from "../../assets/pilulas1.png";

function Navbar() {
  return (
    <>
      <nav className="flex items-center bg-green-600 p-4 ">
        <Link to={"/"}>
          <div className="flex">
            <img
              src={pilulas1}
              alt="pilulas"
              width={"45px"}
              className="ml-10"
            />
            <div className="text-white text-2xl font-bold ml-3">
              <p>Farmácia</p>
            </div>
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
