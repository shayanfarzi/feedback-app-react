import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedbacks, handleDelete }) {
  //list
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((item) => (
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
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return feedbacks.map(({ text, id, rating }) => {
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
