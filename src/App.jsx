import { useState } from "react";

import { Choices, ScoreBoard } from "./components/index";

const choices = [
  { label: "rock", icon: "✊" },
  { label: "paper", icon: "🖐️" },
  { label: "scissor", icon: "✌️" },
];

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
      return "😋You Win!!";
    } else {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      return "🥲You lose..";
    }
  };

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice + "d");
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
    <section className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="relative flex h-4/6 w-full max-w-md flex-col items-center space-y-5 rounded-md bg-slate-400">
        <h1 className="mt-5 bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 bg-clip-text font-sans text-4xl font-extrabold text-transparent shadow-sm">
          Rock Paper Scissor
        </h1>
        <ScoreBoard score={score} />

        {/* choices */}
        <Choices
          playGame={playGame}
          result={result}
          userChoice={userChoice}
          computerChoice={computerChoice}
        />

        {/* <PlayGame /> */}

        <button
          onClick={resetGame}
          className="mb-5 rounded-md bg-red-600 px-4 py-2 text-red-200 hover:bg-red-800"
        >
          Reset game!
        </button>
      </div>
    </section>
  );
};

export default App;
