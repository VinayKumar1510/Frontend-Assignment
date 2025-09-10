"use client";

interface ViewToggleProps {
  view: "card" | "row";
  onChange: (view: "card" | "row") => void;
}

export default function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div className="flex items-center justify-between w-32 bg-gray-200 rounded-full p-1 cursor-pointer select-none">
      {/* Card Option */}
      <div
        onClick={() => onChange("card")}
        className={`w-1/2 text-gray-700 text-center py-1 rounded-full transition-colors duration-300 ${
          view === "card" ? "bg-white shadow" : ""
        }`}
      >
        Card
      </div>

      {/* Row Option */}
      <div
        onClick={() => onChange("row")}
        className={`w-1/2 text-gray-700 text-center py-1 rounded-full transition-colors duration-300 ${
          view === "row" ? "bg-white shadow" : ""
        }`}
      >
        Row
      </div>
    </div>
  );
}
