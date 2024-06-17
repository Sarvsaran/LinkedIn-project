import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#1D232A]">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-extrabold text-lg text-blue-600 ">LinkedIN</h1>
        </Link>
        <ul className="flex gap-4 text-blue-200 font-semibold">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/log-in">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
