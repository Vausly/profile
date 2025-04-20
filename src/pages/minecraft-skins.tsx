import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Pagination from '../components/pagination';
import { AnimatePresence, motion } from 'framer-motion';
import { MinecraftSkinHistory } from '../data/MCSkinHistory';
import SkinActions from '../components/SkinActions';
// import { useEffect } from 'react';

const MCSkins = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(MinecraftSkinHistory.length / ITEMS_PER_PAGE);
  const currentProjects = MinecraftSkinHistory.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const [previewSkin, setPreviewSkin, ] = useState<string | null>(null);

  return (
    <PageWrapper title="Minecraft Skins | Vausly Media">
      <div className="py-20 px-4 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-none">
          <h1 className="text-3xl font-bold text-center mb-6">Minecraft Skin</h1>
          <p className="mb-10 text-lg text-purple-200 text-center">
            Here is a list of the archived Minecraft Skin!
          </p>
          {/* Animate Presence */}
          <AnimatePresence mode="wait">
          <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
          >
            {currentProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="bg-black/30 p-5 rounded-lg border border-white/20 flex flex-col sm:flex-row gap-4 items-center sm:items-start"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-24 h-24 rounded-md object-cover border border-white/20"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                  <p className="text-sm text-white/90 mb-3">{project.description}</p>
                  {project.links?.map((link, i) => (
                    <SkinActions
                      key={i}
                      downloadLink={link.href}
                      onPreview={() => setPreviewSkin(project.image)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <p className="mb-5 text-lg text-purple-200 text-center">
            If you have skill issue, you can download this skin on <a href="https://l.vausly.com/skinmf" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">Mediafire.</a>
      </p>
      {previewSkin && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setPreviewSkin(null)} // klik luar gambar untuk tutup
          >
            <div
              className="flex flex-col items-center p-4 rounded-xl"
              onClick={(e) => e.stopPropagation()} // mencegah modal tertutup saat klik dalam
            >
              <img
                src={previewSkin}
                alt="Skin Preview"
                className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] max-w-full max-h-[75vh] object-contain rounded-md shadow-xl border border-white/40 transition-transform duration-300"
              />
              <button
                onClick={() => setPreviewSkin(null)}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white text-base font-semibold px-12 py-4 rounded-md shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
    </PageWrapper>
  );
};

export default MCSkins;
