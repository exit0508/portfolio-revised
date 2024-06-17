import { Link } from "wouter";

const Header = () => {
  return (
    <header className="">
      <div className="">
        <h1 className="">Yurina Deguchi</h1>
        <nav>
          <ul className="">
            <li>
              <Link href="/">
                <a className="hover:text-gray-200">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-200">About</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a className="hover:text-gray-200">Portfolio</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
