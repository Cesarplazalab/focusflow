import type { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
      <div className="w-full max-w-4xl space-y-8">
        {children}
      </div>
    </div>
  );
}

export default PageWrapper;
