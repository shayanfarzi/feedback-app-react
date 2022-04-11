import "./App.css";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  useEffect(() => {
    setFeedback(FeedbackData);
  }, []);
  return (
    <>
      <Header text='Feedback App'></Header>
      <div className='container'>
        <FeedbackList feedbacks={feedback} />
      </div>
    </>
  );
}

export default App;
