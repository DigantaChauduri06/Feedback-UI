import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Header from "./Components/Header";
import GlobalStyled from "./Common/GlobalStyled";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";

// data import
import data from "./Data/FeedData";

// type import
import { feedbackId } from "./Common/all.types";
import FeedbackForm from "./Components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(data);
  const [delId, setDelId] = useState<feedbackId>(null);
  const isMounted = useRef(0);

  useEffect(() => {
    if (isMounted.current > 1) {
      if (!window.confirm("Are you sure you want to delete this?")) {
        return;
      }
      if (delId === null) return;
      setFeedback((state) => state.filter((item) => item.id !== delId));
    } else {
      isMounted.current++;
    }
  }, [delId]);
  return (
    <>
      <GlobalStyled />
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackForm setData={setFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} setDelId={setDelId} />
      </div>
    </>
  );
}

export default App;
