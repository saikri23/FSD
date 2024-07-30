import React from "react";
import CommentBox from "./CommentBox";

const Comment = () => {
  const data = [
    {
      name: "sai krish",
      disc: "very good boy",
      replies: [
        {
          name: "kohli",
          disc: "ok ok boy",
          replies: [
            {
              name: "rama",
              disc: "very good boy",
              replies: [
                {
                  name: "ranvir",
                  disc: "ok ok boy",
                },
              ],
            },
            {
              name: "sitha",
              disc: "very good boy",
              replies: [
                {
                  name: "hanuman",
                  disc: "ok ok boy",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "mumaith khan",
      disc: "very good boy",
      replies: [
        {
          name: "raina",
          disc: "ok ok boy",
        },
        {
          name: "irpan",
          disc: "good bowler",
          replies: [
            {
              name: "patan",
              disc: "good brother",
            },
          ],
        },
      ],
    },
    {
      name: "sharukh khan",
      disc: "very good boy",
      replies: [
        {
          name: "gambit",
          disc: "ok ok boy",
        },
      ],
    },
  ];

  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comment;
