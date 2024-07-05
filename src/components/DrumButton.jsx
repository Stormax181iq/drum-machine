import { useRef } from "react";
import PropTypes from "prop-types";

export default function DrumButton({ keyTrigger, onPlayAudio }) {
  const audioRef = useRef(null);
  let audioSource;

  switch (keyTrigger) {
    case "a":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3";
      break;
    case "z":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3";
      break;
    case "e":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3";
      break;
    case "q":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3";
      break;
    case "s":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3";
      break;
    case "d":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3";
      break;
    case "w":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3";
      break;
    case "x":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3";
      break;
    case "c":
      audioSource =
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={() => onPlayAudio(audioRef.current)}
      className="text-3xl font-semibold bg-blue-400 m-1 rounded-lg hover:bg-blue-500 active:bg-blue-700"
    >
      <audio ref={audioRef} src={audioSource}></audio>
      {keyTrigger.toUpperCase()}
    </button>
  );
}

DrumButton.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  onPlayAudio: PropTypes.func.isRequired,
};
