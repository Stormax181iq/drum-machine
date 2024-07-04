export default function DrumMachine() {
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-3 w-32">
        <button>Q</button>
        <button>W</button>
        <button>E</button>
        <button>A</button>
        <button>S</button>
        <button>D</button>
        <button>Z</button>
        <button>X</button>
        <button>C</button>
      </div>
      <div className="flex flex-col">
        <input type="checkbox" />
        <p>Media Playing...</p>
        <input type="range" />
      </div>
    </div>
  );
}
