import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import FeedbackList from "./components/FeedbackList";
import RatingSelect from "./components/RatingSelect";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  useEffect(() => {
    setFeedback(FeedbackData);
  }, []);
  return (
    <>
      <Header text='Feedback App'></Header>
      <div className='container'>
        <RatingSelect className='card' select={7} selected={8}></RatingSelect>
      </div>
      <div className='container'>
        <FeedbackList feedbacks={feedback} />
      </div>
    </>
  );
}

export default App;
