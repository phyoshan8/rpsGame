function PlayGame() {
  return (
    <div className="flex flex-col items-center gap-5">
      <button className="w-20 rounded-md bg-blue-600 px-4 py-2 text-red-200 hover:bg-blue-800">
        PLAY!!
      </button>
      <p className=""> You:🖐️ Computer:✊ </p>
      <p className="w-full items-start text-2xl font-medium text-green-600">
        😋You Win!!
      </p>

      {/* <p className="w-full items-end text-2xl font-medium text-red-600">
        🥲You Lose!!
      </p> */}
    </div>
  );
}

export default PlayGame;
