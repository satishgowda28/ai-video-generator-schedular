import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/40 font-sans antialiased">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 pt-6">
            {children}
        </main>
      </div>
    </div>
  );
}
