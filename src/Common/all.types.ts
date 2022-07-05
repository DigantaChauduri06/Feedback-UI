export type feedbackItemProp = {
  rating: number;
  text: string;
  reverse: boolean;
  id: number;
  setDelId: Function;
};

export type feedbackProp = {
  feedback: {
    id: number;
    rating: number;
    text: string;
  }[];
  setDelId: Function;
};

export type CardProp = {
  isCard: boolean;
  children: React.ReactNode;
};

export type feedbackReviewProp = {
  feedback: {
    id: number;
    rating: number;
    text: string;
  }[];
};
export type singleReview = {
  id: number;
  rating: number;
  text: string;
}[];

export type RatingsProp = {
  selected: number;
  setSelected: Function;
};

export type feedbackType = {
  text: string;
  ratings: number;
};

export type feedbackId = null | number;
