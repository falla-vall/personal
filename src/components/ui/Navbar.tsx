import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import toast from "react-hot-toast";
import { navs } from "../../mocks";

const Navbar: FC = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-auto bottom-0 overflow-hidden w-full bg-black flex-shrink-0 flex flex-row lg:(top-0 right-0 w-auto h-screen flex-col) items-center justify-center gap-4 p-4">
      <div className="absolute hidden lg:(block) top-0 left-0 px-4 py-12">
        <h1 className="text-4xl font-bold">flla.</h1>
      </div>
      {navs.map((nav, index) => {
        const isActive = router.pathname === nav.path;
        return nav.isSoon ? (
          <button
            key={index}
            onClick={() => {
              toast("Coming soon!", {
                icon: "⏳",
                style: {
                  borderRadius: "10px",
                  border: "1px solid #E1A140",
                  background: "#000",
                  color: "#fff",
                },
              });
            }}
            className={`relative group md:w-32 p-2 rounded transition-all duration-300 ease ${
              isActive
                ? "w-24 overflow-clip bg-white text-black"
                : "w-9 text-white"
            }`}
          >
            <div className="flex items-center gap-2 group-focus:(sticky z-1 text-black)">
              <nav.icon size={20} />
              <span
                className={`${
                  isActive ? "block" : "hidden"
                } md:(block) text-sm md:text-md`}
              >
                {nav.name}
              </span>
            </div>
            <span className="absolute left-0 top-0 lg:(top-full) h-2px w-0 group-hover:(w-full) group-focus:(top-0 h-full rounded) transition-all duration-300 ease bg-white" />
          </button>
        ) : (
          <Link key={index} href={nav.path} scroll={false}>
            <a
              className={`relative group md:w-32 p-2 rounded transition-all duration-300 ease ${
                isActive
                  ? "w-24 overflow-clip bg-white text-black"
                  : "w-9 text-white"
              }`}
            >
              <div className="flex items-center gap-2 group-focus:(sticky z-1 text-black)">
                <nav.icon size={20} />
                <span
                  className={`${
                    isActive ? "block" : "hidden"
                  } md:(block) text-sm md:text-md`}
                >
                  {nav.name}
                </span>
              </div>
              <span className="absolute left-0 top-0 lg:(top-full) h-2px w-0 group-hover:(w-full) group-focus:(top-0 h-full rounded) transition-all duration-300 ease bg-white" />
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
