import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("this is feedback");

  const handleClick = () => {
    setRating(10);
  };
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Rate</button>
    </div>
  );
}

export default FeedbackItem;
