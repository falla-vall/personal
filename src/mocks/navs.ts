import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineServer,
  HiOutlineDocumentText,
  HiOutlinePhone,
} from "react-icons/hi";
const data = [
  {
    name: "Home",
    path: "/",
    icon: HiOutlineHome,
  },
  {
    name: "About",
    path: "/about",
    icon: HiOutlineUser,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: HiOutlineServer,
    isSoon: true,
  },
  {
    name: "Resume",
    path: "/resume",
    icon: HiOutlineDocumentText,
    isSoon: true,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: HiOutlinePhone,
    isSoon: true,
  },
];

export default data;
