import PropTypes from "prop-types";

export default function DrumMachine() {
  return (
    <div className="flex justify-between border-orange-300 border-4 p-6 rounded-xl bg-slate-100">
      <div className="grid grid-cols-3 w-64 h-64">
        {["a", "z", "e", "q", "s", "d", "w", "x", "c"].map((key) => (
          <DrumButton key={key} keyTrigger={key} />
        ))}
      </div>
      <div className="flex flex-col justify-around ml-10 items-center">
        <label className="inline-flex items-center cursor-pointer">
          <input className="sr-only peer" type="checkbox" />
          <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-md">Power</span>
        </label>
        <div className="rounded-lg bg-blue-400 w-full p-4 flex justify-center">
          <p>Media Playing...</p>
        </div>
        <div className="flex items-center flex-col">
          <input
            className="block"
            type="range"
            id="volume"
            name="volume"
            min={0}
            max={100}
          />
          <label htmlFor="volume">Volume</label>
        </div>
      </div>
    </div>
  );
}

function DrumButton({ keyTrigger }) {
  return (
    <button className="text-3xl font-semibold bg-blue-400 m-1 rounded-lg hover:bg-blue-500 active:bg-blue-700">
      {keyTrigger.toUpperCase()}
    </button>
  );
}

DrumButton.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
};
