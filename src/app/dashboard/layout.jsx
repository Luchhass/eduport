// app/dashboard/layout.jsx

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F9FD] p-4 md:p-8">
      <div className="max-w-350 mx-auto w-full">{children}</div>
    </div>
  );
}
