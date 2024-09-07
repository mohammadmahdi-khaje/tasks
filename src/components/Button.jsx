import react from "react";

//---این فانکشن با ورودی که از کاربر میگیره یک دکمه میسازه
const Button = ({ className, children, style, onClick }) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
