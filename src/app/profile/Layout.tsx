import "./globals.css";

export const metadata = {
  title: "Resume Analyzer",
  description: "Analyze resumes and job descriptions using AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <h2><span>Login to Resume Analyzer</span></h2>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
