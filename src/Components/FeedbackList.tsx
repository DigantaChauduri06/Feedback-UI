import { motion } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import Card from "../Common/Card";

import { feedbackProp } from "../Common/all.types";

function FeedbackList({ feedback, setDelId }: feedbackProp) {
  if (feedback.length == 0) return <h1>No Feedback Yet!!</h1>;

  return (
    <Card isCard={false}>
      {feedback &&
        feedback.map((item) => (
          <div className="feedback-list" key={item.id}>
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                rating={item.rating * 1}
                text={item.text}
                id={item.id}
                reverse={false}
                setDelId={setDelId}
              />
            </motion.div>
          </div>
        ))}
    </Card>
  );
}
export default FeedbackList;
