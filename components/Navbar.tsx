import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { setTheme } from "../redux/actions/themes";
import { API, setAuthToken } from "../utils/api";
import { login, logout } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { themeToggle } from "../assets/lottie";
interface STATE {
  theme: string;
  userData: {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      picture: string;
    };
  };
}

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [isOpen, setIsOpen] = useState(false);
  const { theme, userData } = useSelector((state: STATE) => state);
  const dispatch = useDispatch();
  const toggleRef: any = useRef(null);
  const NavTabs = () => {
    toast("Will be available soon!", {
      icon: "🤗",
      style: {
        borderRadius: "10px",
        background: theme === "dark" ? "#1a1a1a" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      },
    });
  };
  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);
  };
  const switchTheme = useCallback(() => {
    if (theme === "dark") {
      rawSetTheme("dark");
      toggleRef.current.playSegments([1, 40], true);
    } else {
      rawSetTheme("light");
      toggleRef.current.playSegments([41, 80], true);
    }
  }, [theme]);
  useEffect(() => {
    switchTheme();
  }, [switchTheme]);
  const onToggle = () => {
    theme === "dark" ? dispatch(setTheme("light")) : dispatch(setTheme("dark"));
  };
  const activeTab =
    "block py-2 pr-4 pl-3 text-white bg-fuchsia-700 rounded md:bg-transparent md:text-fuchsia-700 md:dark:text-fuchsia-300 md:p-0 dark:text-white";
  const inactiveTab =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const onSuccess = (response: any) => {
    const { tokenId } = response;
    setAuthToken(tokenId);
    API.get("/auth").then((res) => {
      API.get("/user").then((resp: any) => {
        if (resp.data[0].google_id === res.data.id) {
          dispatch(login(tokenId, res.data));
          toast(`Welcome Back!, ${res.data.name.split(" ")[0]}`, {
            icon: "👋",
            style: {
              borderRadius: "10px",
              background: theme === "dark" ? "#1a1a1a" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
            },
          });
        }
      });
    });
  };
  const onFailure = (response: any) => {
    console.log(response);
  };
  const onLogoutSuccess = () => {
    dispatch(logout());
    toast.success("You have been logged out");
  };
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center md:gap-4">
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                width={90}
                height={30}
                objectFit="contain"
                alt="logo"
                className="dark:invert"
              />
            </a>
          </Link>
          {userData.user ? (
            <div className="flex items-center md:gap-2">
              <Image
                src={userData.user.picture}
                width={40}
                height={40}
                alt="picture"
                className="rounded-full"
              />
              <h6 className="hidden md:block text-sm text-gray-700 dark:text-gray-300">
                {userData.user.name}
              </h6>
              <GoogleLogout
                clientId={process.env.GOOGLE_CLIENT_ID}
                render={(renderProps: any) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="bg-red-700 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-500 rounded px-2 py-1 text-white dark:text-gray-900"
                  >
                    Logout
                  </button>
                )}
                onLogoutSuccess={onLogoutSuccess}
              />
            </div>
          ) : (
            <GoogleLogin
              clientId={process.env.GOOGLE_CLIENT_ID}
              render={(renderProps: any) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="text-white dark:text-gray-800 hover:text-gray-800 dark:hover:text-white"
                >
                  Google
                </button>
              )}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          )}
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`${!isOpen && "hidden"} md:flex w-full md:w-auto`}>
          <ul className="flex flex-col md:items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/">
                <a
                  className={pathname === "/" ? activeTab : inactiveTab}
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a
                  className={
                    pathname === "/dashboard" ? activeTab : inactiveTab
                  }
                >
                  Dashboard
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a
                  onClick={() => NavTabs()}
                  className={pathname === "/project" ? activeTab : inactiveTab}
                >
                  Project
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a
                  onClick={() => NavTabs()}
                  className={pathname === "/contact" ? activeTab : inactiveTab}
                >
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Lottie
                lottieRef={toggleRef}
                animationData={themeToggle}
                loop={false}
                autoplay={false}
                onClick={() => onToggle()}
                className="h-12 cursor-pointer hover:brightness-150 dark:hover:brightness-50"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
