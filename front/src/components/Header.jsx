import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
const Header = () => {
  return (
    <header className="w-full shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
        {/* Logo */}
        <Link to={"/"} className="flex items-center justify-center gap-1">
          <img className="h-9" src={logo} alt="Logo da placebnb" />
          <p className="text-primary-600 text-[18px] font-bold">placebnb</p>
        </Link>

        {/* Nav */}
        <div className="hidden items-center rounded-full border border-gray-300 px-4 py-2 shadow-sm lg:flex">
          <Link to={"/"} className="border-r border-r-gray-300 pr-4">Qualquer lugar</Link>
          <Link to={"/"} className="border-r border-r-gray-300 px-4">Qualquer semana</Link>
          <Link to={"/"} className="px-4">Hóspedes</Link>

          <Link to={"/"} className="bg-primary-600 rounded-full p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Link>
        </div>

        {/* Profile  */}
        <Link to={"login"} className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 shadow-sm sm:px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>

          <p className="max-w-20 truncate sm:max-w-32">Perfil</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
