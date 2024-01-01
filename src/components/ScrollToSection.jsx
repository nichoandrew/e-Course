import { Link as ScrollLink } from "react-scroll";

const ScrollToSection = ({ to, children, activeSection }) => {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      className={to === activeSection ? "text-active cursor-pointer" : "cursor-pointer"}>
      {children}
    </ScrollLink>
  );
};

export default ScrollToSection;