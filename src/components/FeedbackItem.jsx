// import { useState } from "react";

import Card from "./shared/Card";

function FeedbackItem({ text, rating }) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("this is feedback");

  return (
    <Card reverse={true}>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </Card>
  );
}

export default FeedbackItem;
