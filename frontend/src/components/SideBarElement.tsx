import { motion } from "framer-motion";

interface SideBarElementProps {
  element: string;
  logo: string;
  active: boolean;
  onClick: () => void;
}

const SideBarElement = ({
  element,
  logo,
  onClick,
  active,
}: SideBarElementProps) => {
  return (
    <div
      className="relative flex flex-row items-center cursor-pointer p-[1rem]"
      onClick={onClick}
    >
      {active && (
        <motion.div
          layoutId="sidebarHighlight"
          className="absolute inset-y-2 inset-x-2 bg-white/50 backdrop-blur-sm outline outline-1 outline-offset-[-0.0625rem] outline-white/50 rounded-lg shadow-xl"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <div className="relative z-10 flex items-center space-x-[1rem]">
        <img src={logo} alt={`${element} icon`} className="w-6 h-6 ml-4" />
        <div className="text-black text-md font-sf-pro pl-[1rem]">{element}</div>
      </div>
    </div>
  );
};

export default SideBarElement;
