// import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ text, rating, id }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("this is feedback");
  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button onClick={() => deleteFeedback(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}

export default FeedbackItem;
