import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </>
  );
}
