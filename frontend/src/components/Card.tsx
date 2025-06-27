import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      {children}
    </div>
  );
}

export default Card;
