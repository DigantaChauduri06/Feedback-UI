type ButtonProps = {
  children: React.ReactNode;
  handleSubmit: Function;
  type: "primary" | "secondery";
  isDisabled: boolean;
};

function Button({
  children,
  handleSubmit,
  type,
  isDisabled = true,
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${type}`}
      disabled={isDisabled}
      onClick={(e) => handleSubmit(e)}
    >
      {children}
    </button>
  );
}
export default Button;
