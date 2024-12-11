import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Resume Analyzer",
  description: "Analyze resumes and job descriptions using AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
