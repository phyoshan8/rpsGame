const icons = [
  { label: "rock", icon: "✊" },
  { label: "paper", icon: "🖐️" },
  { label: "scissor", icon: "✌️" },
];

function Choices({ playGame, result, userChoice, computerChoice }) {
  const getIcon = (choice) => {
    return icons.find((i) => i.label === choice)?.icon ?? "";
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-3/5 justify-center gap-2 rounded-md px-10">
        {icons.map((i) => (
          <button
            onClick={() => playGame(i.label)}
            className="rounded-full bg-indigo-600 px-5 py-3 text-3xl hover:bg-indigo-700"
          >
            {i.icon}
          </button>
        ))}
      </div>
      <div></div>
      <p className="">You:{getIcon(userChoice)}</p>
      <p className="">Computer:{getIcon(computerChoice)}</p>
      <p className="w-full items-start text-2xl font-medium text-green-600">
        {result}
      </p>
    </div>
  );
}

export default Choices;
