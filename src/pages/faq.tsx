import React from "react";
import PageWrapper from "../components/PageWrapper";

const FAQPage = () => {
  return (
    <PageWrapper title="FAQ | Vausly Media">
      <div className="py-20 px-4 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-none">
          <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
          <div className="space-y-6">

          <div className="bg-black/30 p-5 rounded-lg border border-white/20">
              <h2 className="text-lg font-semibold mb-2">Where can I find your social media?</h2>
              <p className="text-sm text-white/90">
                All of our socials and links are available at{" "}
                <a
                  href="https://link.vausly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline hover:text-purple-300"
                >
                  https://link.vausly.com
                </a>.
              </p>
            </div>

            <div className="bg-black/30 p-5 rounded-lg border border-white/20">
              <h2 className="text-lg font-semibold mb-2">Do you offer custom projects?</h2>
              <p className="text-sm text-white/90">
                Currently no.
              </p>
            </div>

            <div className="bg-black/30 p-5 rounded-lg border border-white/20">
              <h2 className="text-lg font-semibold mb-2">How can I share an idea with you?</h2>
              <p className="text-sm text-white/90">
                Check my <a href="/contact" className="text-purple-400 underline hover:text-purple-300">contact page</a> and tell us more about your ideas or project.
              </p>
            </div>

            <div className="bg-black/30 p-5 rounded-lg border border-white/20">
              <h2 className="text-lg font-semibold mb-2">How do i support your project?</h2>
              <p className="text-sm text-white/90">
                You can support our project simply by just following our social media, interact (with pressing the like button), sharing link ofour content, and enjoy our content or you can also support by using the <a href="/donate" className="text-purple-400 underline hover:text-purple-300">donation page</a>.
              </p>
            </div>

            <div className="bg-black/30 p-5 rounded-lg border border-white/20">
              <h2 className="text-lg font-semibold mb-2">Is reuploading or reuse of your content allowed?</h2>
              <p className="text-sm text-white/90">
                No, but there are exceptions in certain cases. Please check our <a href="/copyright" className="text-purple-400 underline hover:text-purple-300">copyright page</a> for more info.  
              </p>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FAQPage;
