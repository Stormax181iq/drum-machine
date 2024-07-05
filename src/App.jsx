import { useState, useEffect, useRef } from "react";

import DrumMachine from "./components/DrumMachine";

function App() {
  const [isPowered, setIsPowered] = useState(true);
  const [volume, setVolume] = useState(50);
  const audioData = [
    {
      key: "a",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    },
    {
      key: "z",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    },
    {
      key: "e",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    },
    {
      key: "q",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    },
    {
      key: "s",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    },
    {
      key: "d",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },
    {
      key: "w",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    },
    {
      key: "x",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    },
    {
      key: "c",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    },
  ];
  const audioRefs = useRef({});

  function handlePlayAudio(letter) {
    const audioElement = audioRefs.current[letter];
    if (audioElement) {
      audioElement.volume = volume / 100;
      audioElement.play();
    }
  }

  function handleKeyDown(e) {
    handlePlayAudio(e.key.toLowerCase());
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="flex h-svh bg-slate-400 items-center justify-center">
      <DrumMachine
        onPlayAudio={handlePlayAudio}
        isPowered={isPowered}
        setIsPowered={setIsPowered}
        volume={volume}
        setVolume={setVolume}
      />
      {audioData.map(({ key, src }) => {
        return (
          <audio
            key={key}
            ref={(e) => {
              audioRefs.current[key] = e;
            }}
            src={src}
          ></audio>
        );
      })}
    </div>
  );
}

export default App;
