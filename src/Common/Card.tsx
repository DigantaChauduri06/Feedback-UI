import { CardProp } from "../Common/all.types";

function Card({ children, isCard }: CardProp) {
  return <div className={`${isCard && "card"}`}>{children}</div>;
}
export default Card;
