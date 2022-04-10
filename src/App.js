import "./App.css";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text='Feedback App'></Header>
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
