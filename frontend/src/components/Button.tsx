import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary' | 'danger';
}

function Button({ children, onClick, type = 'button', color = 'primary' }: ButtonProps) {
  let baseStyle = 'px-4 py-2 rounded-lg transition text-white ';
  let colorStyle = '';

  if (color === 'primary') colorStyle = 'bg-blue-500 hover:bg-blue-600';
  if (color === 'secondary') colorStyle = 'bg-green-500 hover:bg-green-600';
  if (color === 'danger') colorStyle = 'bg-red-500 hover:bg-red-600';

  return (
    <button onClick={onClick} type={type} className={baseStyle + colorStyle}>
      {children}
    </button>
  );
}

export default Button;
