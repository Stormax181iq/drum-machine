import PropTypes from "prop-types";

export default function DrumButton({ keyTrigger, onPlayAudio }) {
  return (
    <button
      onClick={() => onPlayAudio(keyTrigger.toLowerCase())}
      className="text-3xl font-semibold bg-blue-400 m-1 rounded-lg hover:bg-blue-500 active:bg-blue-700"
    >
      {keyTrigger.toUpperCase()}
    </button>
  );
}

DrumButton.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  onPlayAudio: PropTypes.func.isRequired,
};
