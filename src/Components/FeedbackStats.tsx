import { feedbackReviewProp, singleReview } from "../Common/all.types";

function FeedbackStats({ feedback }: feedbackReviewProp) {
  function average(feedback: singleReview) {
    return (
      feedback.reduce((acc, cur) => (acc += cur.rating), 0) / feedback.length
    ).toPrecision(2);
  }
  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h4>
        Average rating {isNaN(+average(feedback)) ? 0 : +average(feedback)}
      </h4>
    </div>
  );
}
export default FeedbackStats;
