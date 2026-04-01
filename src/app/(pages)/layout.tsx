import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TimedTopBar } from "@/components/ui/timed-top-bar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <TimedTopBar />
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
