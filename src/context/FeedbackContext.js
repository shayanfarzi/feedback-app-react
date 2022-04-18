import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { delData, postData, updateData } from "../utils/request";
const FeedbackContext = createContext();
const BASE_URL = "http://localhost:5000/feedback";
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`${BASE_URL}?_sort=id&_order=desc`);
    const data = await response.json();
    console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    const data = await updateData(`${BASE_URL}/${id}`, updItem);
    // setFeedback(
    //   feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    // );
    fetchFeedback();
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const deleteFeedback = async (id) => {
    await delData(BASE_URL + "/" + id);
    // console.log(data);
    const filtered = feedback.filter((item) => item.id !== id);
    setFeedback(filtered);
  };
  const addFeedback = async (newFeedback) => {
    const data = await postData(BASE_URL, newFeedback);
    setFeedback([data, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        editFeedback,
        deleteFeedback,
        addFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
