import { nanoid } from "@reduxjs/toolkit";

const items = [
    {
        id: nanoid(),
        to: "/news",
        text: "News"
    },
     {
        id: nanoid(),
        to: "/notices",
        text: "Notices"
    },
      {
        id: nanoid(),
        to: "/friends",
        text: "Friends"
    }
]

export default items;