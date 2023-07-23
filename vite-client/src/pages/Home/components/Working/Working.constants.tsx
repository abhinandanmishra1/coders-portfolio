import { FiUser } from 'react-icons/fi';
import { BiCustomize } from 'react-icons/bi';
import { HiOutlineCheckBadge } from 'react-icons/hi2';

export const boxes = [
  {
    title: "Sign Up for CodersPortfolio",
    description:
      "Create an account with CodersPortfolio to get started on building your portfolio and taking control of your coding career.",
    icon: <FiUser className="working__box-icon" color="rgb(124, 129, 202)" />,
  },
  {
    title: "Customize Your Portfolio",
    description:
      "Build your portfolio with your coding projects, experiences and coding platforms like GitHub, Leetcode, and more all in one place.",
    icon: (
      <BiCustomize className="working__box-icon" color="rgb(233, 105, 105)" />
    ),
  },
  {
    title: "Show your portfolio",
    description:
      "Discover job opportunities, internships and freelance gigs and easily showcase your skills.",
    icon: (
      <HiOutlineCheckBadge
        className="working__box-icon"
        color="rgb(99, 187, 174)"
      />
    ),
  },
];
