import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedbacks, handleDelete }) {
  return feedbacks.map(({ text, id, rating }) => {
    return (
      <FeedbackItem
        text={text}
        key={id}
        id={id}
        rating={rating}
        handleDelete={handleDelete}
      />
    );
  });
}

export default FeedbackList;
