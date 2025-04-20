import React from 'react';

interface SkinActionsProps {
  downloadLink: string;
  onPreview: () => void;
}

const SkinActions: React.FC<SkinActionsProps> = ({ downloadLink, onPreview,}) => {
  return (
    <div className="flex gap-3">
      <a
        href={downloadLink}
        download
        className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded transition-all"
      >
        Download
      </a>
      <button
        onClick={onPreview}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-all"
      >
        Preview
      </button>
      
    </div>
  );
};

export default SkinActions;
