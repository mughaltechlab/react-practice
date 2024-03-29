import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Learning React Components",
      size: ".4mb",
      optIcon: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Complete",
        tagColor: "green",
      },
    },
    {
      desc: "Creating Content On Youtube",
      size: ".2mb",
      optIcon: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Pending",
        tagColor: "red",
      },
    },
    {
      desc: "Go To masjid at 5:15 pm",
      size: ".2mb",
      optIcon: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Complete",
        tagColor: "blue",
      },
    },
    {
      desc: "Learning React Components",
      size: ".4mb",
      optIcon: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Complete",
        tagColor: "yellow",
      },
    },
    {
      desc: "Creating Content On Youtube",
      size: ".2mb",
      optIcon: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Pending",
        tagColor: "red",
      },
    },
    {
      desc: "Go To masjid at 5:15 pm",
      size: ".2mb",
      optIcon: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Complete",
        tagColor: "blue",
      },
    },
    {
      desc: "Learning React Components",
      size: ".4mb",
      optIcon: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Complete",
        tagColor: "green",
      },
    },
    {
      desc: "Creating Content On Youtube",
      size: ".2mb",
      optIcon: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Pending",
        tagColor: "yellow",
      },
    },
    {
      desc: "Go To masjid at 5:15 pm",
      size: ".2mb",
      optIcon: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Complete",
        tagColor: "blue",
      },
    },
    {
      desc: "Learning React Components",
      size: ".4mb",
      optIcon: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Complete",
        tagColor: "yellow",
      },
    },
    {
      desc: "Creating Content On Youtube",
      size: ".2mb",
      optIcon: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Pending",
        tagColor: "red",
      },
    },
    {
      desc: "Go To masjid at 5:15 pm",
      size: ".2mb",
      optIcon: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Complete",
        tagColor: "blue",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed flex-wrap w-full h-screen top-0 left-0 z-[2] py-8 px-8 flex gap-2 overflow-hidden overflow-y-auto"
    >
      {data.map((items, index) => (
        <Card data={items} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
