/* eslint-disable react/prop-types */
import { useState } from "react";

function AccordionItem({ week, topic, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-2 flex flex-col justify-center  p-3">
      <button
        className="flex justify-between items-center w-full p-2 bg-slate-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">
          Week {week}: {topic}
        </span>
        <span className="text-red-400">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <p className="p-2">{content}</p>}
    </div>
  );
}
export default AccordionItem;
