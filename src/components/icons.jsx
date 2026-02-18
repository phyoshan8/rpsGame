import { Scissors, Scroll } from "lucide-react";
import { FaRegHandRock } from "react-icons/fa";

const icons = [
  { label: "rock", icon: <FaRegHandRock /> },
  { label: "paper", icon: <Scroll /> },
  { label: "scissor", icon: <Scissors /> },
];

function IconMap() {
  return (
    <>
      {icons.map((i) => (
        <button className="">{i.icon}</button>
      ))}
    </>
  );
}

export default IconMap;
