import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedbacks }) {
  return feedbacks.map((feedback) => {
    return (
      <FeedbackItem
        text={feedback.text}
        key={feedback.id}
        rating={feedback.rating}
      />
    );
  });
}

export default FeedbackList;
