import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { VscClose } from "react-icons/vsc";
import { motion, useDragControls } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="relative w-48 h-56 rounded-[20px] bg-zinc-950/50 text-white px-4 py-6 overflow-hidden"
    >
      <FaRegFileAlt />
      <div className="desc text-sm leading-none text-zinc-400 py-2">
        {data.desc}
      </div>
      <div className="footer absolute bottom-0 left-0 w-full  ">
        <div className="flex justify-between items-center px-4 py-3 ">
          <div className="size text-zinc-400 text-xs">{data.size}</div>
          <div className="opt-icon cursor-pointer hover:scale-150 hover:rotate-[360deg] transition-transform hover:text-red-400">
            {data.optIcon ? <LuDownload /> : <VscClose />}
          </div>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag bg-${data.tag.tagColor}-600 w-full py-2 px-4 flex items-center justify-center`}
          >
            <div className="tag-title truncate">{data.tag.tagTitle}</div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
