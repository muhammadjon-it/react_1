import { memo } from 'react';

const Button = memo(({ text }) => {
    console.log("Button rendering");
  return (
    <button>{text}</button>
  );
});

export default Button;
