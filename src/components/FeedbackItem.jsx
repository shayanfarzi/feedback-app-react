// import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ text, rating, id, handleDelete }) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("this is feedback");
  return (
    <Card reverse={true}>
      <div className='num-display'>{rating}</div>
      <button onClick={() => handleDelete(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}

export default FeedbackItem;
