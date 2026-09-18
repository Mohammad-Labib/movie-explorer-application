const Navbar = () => {
  return (
    <div className="navbar bg-gray-500 shadow-sm px-4">
      {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a href="/" className=" text-xl text-yellow-500 font-bold">
          Movie Explorer
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="navbar-end">
        <a href="/movies" className="btn btn-primary">
          Browse Movies
        </a>
      </div>
    </div>
  );
};

export default Navbar;