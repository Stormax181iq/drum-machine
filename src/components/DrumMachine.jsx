import PropTypes from "prop-types";

import DrumButton from "./DrumButton";

export default function DrumMachine({
  onPlayAudio,
  isPowered,
  setIsPowered,
  volume,
  setVolume,
}) {
  return (
    <div className="flex justify-between border-orange-300 border-4 p-6 rounded-xl bg-slate-100">
      <div className="grid grid-cols-3 w-64 h-64">
        {["a", "z", "e", "q", "s", "d", "w", "x", "c"].map((key) => (
          <DrumButton
            key={key}
            keyTrigger={key}
            onPlayAudio={onPlayAudio}
            keyValue
          />
        ))}
      </div>
      <div className="flex flex-col justify-around ml-10 items-center">
        <label className="inline-flex items-center cursor-pointer">
          <input
            className="sr-only peer"
            type="checkbox"
            checked={isPowered}
            onChange={() => setIsPowered(!isPowered)}
          />
          <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-md">Power</span>
        </label>
        <div className="rounded-lg bg-blue-400 w-full p-4 flex justify-center">
          <p>{isPowered && "Media Ready ..."}</p>
        </div>
        <div className="flex items-center flex-col">
          <input
            className="block"
            type="range"
            id="volume"
            name="volume"
            min={0}
            value={volume}
            max={100}
            onChange={(e) => setVolume(e.target.value)}
          />
          <label htmlFor="volume">Volume</label>
        </div>
      </div>
    </div>
  );
}

DrumMachine.propTypes = {
  onPlayAudio: PropTypes.func.isRequired,
  isPowered: PropTypes.bool.isRequired,
  setIsPowered: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
};
