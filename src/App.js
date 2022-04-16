import { v4 as uuidv4 } from "uuid";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  useEffect(() => {
    setFeedback(FeedbackData);
  }, []);
  const deleteFeedback = (id) => {
    const filtered = feedback.filter((item) => item.id !== id);
    setFeedback(filtered);
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Header text='Feedback App'></Header>

      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
