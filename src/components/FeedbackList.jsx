import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
  //list
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem
              text={item.text}
              key={item.id}
              id={item.id}
              rating={item.rating}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return feedback.map(({ text, id, rating }) => {
  //   return (
  //     <FeedbackItem
  //       text={text}
  //       key={id}
  //       id={id}
  //       rating={rating}
  //       handleDelete={handleDelete}
  //     />
  //   );
  // });
}

export default FeedbackList;
