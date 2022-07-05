import { useState } from "react";
import Card from "../Common/Card";
import Button from "../Common/Button";
import Ratings from "./Ratings";
import { feedbackType } from "../Common/all.types";

type FeedbackFormProp = {
  setData: Function;
};

type feedbackState = {
  id: number;
  rating: number;
  text: string;
}[];

function FeedbackForm({ setData }: FeedbackFormProp) {
  const [text, setText] = useState("");
  const [isDisabled, setDisabled] = useState(true);
  const [Message, setMessage] = useState("");
  const [ratings, setRatings] = useState(5);
  const [feedback, setFeedback] = useState<feedbackType>({} as feedbackType);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    if (e.target.value.length > 10) {
      setDisabled(false);
      setMessage("");
    } else {
      if (e.target.value.length == 0) return setMessage("");
      setDisabled(true);
      setMessage("Need atleast 10 charecters");
    }
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (text.trim().length < 10) {
      alert("Atleast need 10 charecters");
      setDisabled(true);
      setText("");
      return;
    }
    const FeedBackNew = {
      text,
      ratings,
    };
    console.warn(FeedBackNew);
    setFeedback(FeedBackNew);
    console.log({ id: Math.random() * 10 + 1, text, ratings });

    setData((state: feedbackState) => [
      ...state,
      { text, rating: ratings, id: Math.random() * 100 + 1 },
    ]);
    setText("");
  }
  return (
    <Card isCard={true}>
      <form>
        <h2>Hows your exprense with us?</h2>
        <Ratings setSelected={setRatings} selected={ratings} />
        <div className="input-group">
          <input
            value={text}
            type="text"
            placeholder="Write A Review"
            onChange={(e) => handleChange(e)}
          />
          <Button
            type="primary"
            handleSubmit={handleSubmit}
            isDisabled={isDisabled}
          >
            Submit
          </Button>
        </div>
        {Message && <p className="message">{Message}</p>}
      </form>
    </Card>
  );
}
export default FeedbackForm;
