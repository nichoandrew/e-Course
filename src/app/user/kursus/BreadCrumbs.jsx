import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <div className="flex">
      <nav>
        <ul>
          <li className="flex items-center justify-center">
            <IoIosArrowForward />
            <Link href={`/user/kursus/${breadCrumbs}`} className="text-sm hover:text-blue">
              {breadCrumbs}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumbs;