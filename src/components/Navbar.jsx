import { links } from "../data";

const Navbar = () => {
  return (
    <nav>
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:justify-between sm:py-8">
        <h2 className="text-3xl font-bold">
          The<span className="text-sky-600">Starsinn</span>
        </h2>
        <div className="flex gap-x-7">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-sky-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
