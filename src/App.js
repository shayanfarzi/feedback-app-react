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
  return (
    <>
      <Header text='Feedback App'></Header>

      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
