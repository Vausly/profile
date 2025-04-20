import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

type PageWrapperProps = {
  title?: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
};

const PageWrapper = ({
  title = "Vausly Media",
  description = "Explore Vausly Media – Your creative partner for digital innovation, content, and media solutions.",
  keywords = "vausly media, creative agency, digital content, contact vausly, media solutions",
  children
}: PageWrapperProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1e1b4b] to-[#3f0d63] text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Vausly Media" />
      </Helmet>

      {/* Header ditampilkan di semua halaman */}
      <Header />

      {/* Konten utama */}
      <main className="flex-1">{children}</main>

      {/* Footer ditampilkan di semua halaman */}
      <Footer />
    </div>
  );
};

export default PageWrapper;
