const icons = [
  { label: "rock", icon: "✊" },
  { label: "paper", icon: "🖐️" },
  { label: "scissor", icon: "✌️" },
];

function Choices({ playGame, result, userChoice, computerChoice }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 flex w-3/5 justify-center gap-2 rounded-md px-10">
        {icons.map((i) => (
          <button
            onClick={() => playGame(i.label)}
            className="rounded-full bg-indigo-600 px-5 py-3 text-3xl hover:bg-indigo-700"
          >
            {i.icon}
          </button>
        ))}
      </div>
      <p className="">You:{userChoice}</p>
      <p className="">Computer:{computerChoice}</p>
      <p className="w-full items-start text-2xl font-medium text-green-600">
        {result}
      </p>
    </div>
  );
}

export default Choices;
