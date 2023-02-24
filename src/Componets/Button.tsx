import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

function Button(props: ButtonProps) {
  // How to set flexible 'type'? 
    const { className = 'button', text = 'Button' } = props;
  return <button  className={className} type='button' >{text}</button>;
}

export default Button

