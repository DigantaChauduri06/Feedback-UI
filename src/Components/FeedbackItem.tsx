import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { feedbackItemProp } from "../Common/all.types";

export default function FeedbackItem({
  rating,
  text,
  reverse,
  id,
  setDelId,
}: feedbackItemProp) {
  // const [rating, setRating] = useState<ratingType>(1);
  // const [ratingText, setRationgText] = useState("");

  return (
    <div className={`card ${reverse && "reverse"}`}>
      <div className="num-display">{rating}</div>
      <p className="text-display">{text}</p>
      <button className="close" onClick={() => setDelId(id)}>
        {<FaTimes color="brown" size={"20px"} />}
      </button>
    </div>
  );
}
