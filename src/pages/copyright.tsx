// src/pages/copyright.tsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const CopyrightPage = () => {
  return (
    <PageWrapper
      title="Copyright | Vausly Media"
      description="Learn about copyright and content ownership related to Vausly Media's brand and digital assets."
      keywords="copyright, vausly media, intellectual property, rights, reupload, reuse, content ownership"
    >
      <div className="max-w-4xl mx-auto py-16 px-6 text-white">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Copyright Notice
        </motion.h1>

        <motion.p
          className="mb-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          This website and its content are copyright © Vausly Media unless otherwise stated. All rights reserved.
        </motion.p>

        <motion.p
          className="mb-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          All content, including text, graphics, videos, and images, is the intellectual property of its respective owner. No part of this site may be reproduced, distributed, or transmitted in any form or by any means, without prior written permission or without my agreement.
        </motion.p>

        <motion.p
          className="mb-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Reposting as yours (re-uploading), stealing content, re-editting for commercial, reusing my content for illegal content (like gambling or betting), or manipulating my content without my permission are not allowed, except under specific cases like collaboration content, reaction video, fair use, or when I give you permission, as long as you credit the source in the caption or description. Ask a permission first, to prevent a content removed by accident bacause not whitelisted. Anything else are not allowed. Strict action will be taken for the violators. You can still get copyright strike even you've creditting me. If you have already do that, please remove or delete it, before i take an action for it.
        </motion.p>

        <motion.p
          className="mb-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          If you you found a copyright concern (someone break the rule), please contact us on email at [support @vausly.com] with the subject line "Copyright Infringement" or contact me on <a href="https://t.me/VauslyCH" className="text-purple-400 hover:text-purple-300 transition">Telegram</a> or you can also contact me on <a href="https://discord.vausly.com" className="text-purple-400 hover:text-purple-300 transition">Discord</a>. We will take action and resolve any valid copyright issues immediately.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          For inquiries regarding permissions or licensing, please contact us through the <a href="https://link.vausly.com" className="text-purple-400 hover:text-purple-300 transition">official Vausly Media channels</a>.
        </motion.p>
      </div>
    </PageWrapper>
  );
};

export default CopyrightPage;
