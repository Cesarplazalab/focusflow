import type { ReactNode } from 'react';

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      {children}
    </div>
  );
}

export default Card;

