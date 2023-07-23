interface ButtonProps {
  type?: "type1" | "type2";
  title: string;
  onClick: () => void;
  customClass?: string;
}

const Button = ({
  type = "type1",
  title,
  onClick,
  customClass,
}: ButtonProps) => {
  return (
    <div className={`btn btn__${type} ${customClass || ""}`} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
