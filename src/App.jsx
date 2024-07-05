import { useState } from "react";

import DrumMachine from "./components/DrumMachine";

function App() {
  const [isPowered, setIsPowered] = useState(true);

  function handlePlayAudio(ref) {
    if (isPowered) ref.play();
  }

  return (
    <div className="flex h-svh bg-slate-400 items-center justify-center">
      <DrumMachine
        onPlayAudio={handlePlayAudio}
        isPowered={isPowered}
        setIsPowered={setIsPowered}
      />
    </div>
  );
}

export default App;
