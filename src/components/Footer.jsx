const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      {/* Main Footer */}
      <div className="footer sm:footer-horizontal p-10">
        {/* Brand */}
        <aside>
          <div className="text-2xl font-bold">
            🎬 Movie Explorer
          </div>

          <p className="max-w-xs">
            Discover your favorite movies and TV shows.
            <br />
            Explore, search, and enjoy amazing entertainment.
          </p>
        </aside>

        {/* Explore */}
        <nav>
          <h6 className="footer-title">Explore</h6>

          <a href="/" className="link link-hover">
            Home
          </a>

          <a href="/movies" className="link link-hover">
            Movies
          </a>

          <a href="/about" className="link link-hover">
            About Us
          </a>

          <a href="/contact" className="link link-hover">
            Contact
          </a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>

          <a href="/about" className="link link-hover">
            About Us
          </a>

          <a href="/contact" className="link link-hover">
            Contact
          </a>

          <a className="link link-hover">
            Careers
          </a>

          <a className="link link-hover">
            Press Kit
          </a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>

          <a className="link link-hover">
            Terms of Use
          </a>

          <a className="link link-hover">
            Privacy Policy
          </a>

          <a className="link link-hover">
            Cookie Policy
          </a>
        </nav>

        {/* Newsletter */}
        <form>
          <h6 className="footer-title">Newsletter</h6>

          <fieldset className="w-80">
            <label className="label mb-2">
              Subscribe for movie updates
            </label>

            <div className="join w-full">
              <input
                type="email"
                placeholder="movieexplore@gmail.com"
                className="input input-bordered join-item w-full"
              />

              <button
                type="submit"
                className="btn btn-success join-item"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Copyright */}
      <div className="border-t border-base-300 text-center py-4">
        <p className="text-sm">
          © 2026 Movie Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;