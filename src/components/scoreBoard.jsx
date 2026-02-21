function ScoreBoard({ score }) {
  return (
    <div className="mt-8">
      <h2 className="absolute left-3 top-[90px] -rotate-[35deg] rounded-lg bg-indigo-800 px-3 py-2 font-semibold text-cyan-300 shadow-md">
        Score Board
      </h2>
      <div className="mt-12 grid grid-cols-2">
        <p className="text-xl font-bold text-purple-700">🙂 You:{score.user}</p>
        <p className="text-xl font-bold text-purple-700">
          🖥️ Computer:{score.computer}
        </p>
      </div>
    </div>
  );
}

export default ScoreBoard;
