function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-4 sm:p-8">
      <div className="w-full max-w-4xl space-y-8">{children}</div>
    </div>
  );
}

export default PageWrapper;

