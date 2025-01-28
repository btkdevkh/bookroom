import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthWrapper from "@/components/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Room",
  description: "Book a room for your next meeting",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <br />

          <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthWrapper>
  );
}
