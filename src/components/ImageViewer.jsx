import React, { useEffect, useCallback } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

function ImageViewer({ images, currentIndex, onClose, onNext, onPrev }) {
  // Memoize the event handler
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    // Overlay that covers the entire screen
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal container */}
      <div 
        className="relative bg-gray-900 rounded-lg max-w-3xl w-full mx-auto overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-purple-400 transition-colors z-[60] bg-black/50 rounded-full p-1"
        >
          <IoMdClose size={24} />
        </button>

        {/* Image container */}
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt="Project preview"
            className="w-full h-auto max-h-[70vh] object-contain"
            loading="lazy"
          />

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors z-[60] bg-black/50 rounded-full p-2"
              >
                <IoArrowBack size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors z-[60] bg-black/50 rounded-full p-2"
              >
                <IoArrowForward size={20} />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ImageViewer); 