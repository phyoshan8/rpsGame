import { useState } from "react";
import IconMap from "./components/icons";

const choices = ["rock", "paper", "scissor"];

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const getResult = (user, computer) => {
    if (
      (user === "rock" && computer === "scissor") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissor" && computer === "paper")
    ) {
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
      return "You Win";
    } else {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      return "You lose";
    }
  };

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(getResult(choice, computer));
  };

  //reset function
  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setScore({ user: 0, computer: 0 });
  };

  return (
    <section className=" w-full h-screen bg-gradient-to-r  from-slate-900 to-slate-700  ">
      <div className=" mx-auto w-80 h-96 flex flex-col  items-center rounded-lg pb-10   bg-slate-300 ">
        <ul className=" flex text-3xl pt-5 font-bold text-amber-500 gap-6 justify-between items-center px-10">
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissors</p>
        </ul>
        <div className="flex gap-10 justify-between p-10 text-blue-700  ">
          <IconMap />
        </div>
        <button className="bg-amber-500 w-20 font-bold text-white px-4 justify-center py-2 rounded-lg ">
          Play!
        </button>
      </div>
    </section>
  );
};

export default App;
