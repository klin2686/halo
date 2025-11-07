interface ManualInputPopupProps {
  onClose: () => void;
}

const ManualInputPopup = ({ onClose }: ManualInputPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-3/5 h-2/3 bg-white/50 rounded-3xl shadow-xl backdrop-blur-sm border border-white/50 p-12 flex flex-col items-center gap-6 animate-fadeIn relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black/60 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-sf-pro font-semibold text-black">
          Manual Input
        </h2>
        <input
          type="text"
          className="w-full backdrop-blur-sm rounded-xl border border-white/50 p-4 text-black font-sf-pro text-lg shadow-xl placeholder:text-black/40 focus:outline-none"
          placeholder="Menu title"
        />
        <textarea
          className="w-full flex-1 backdrop-blur-sm rounded-xl border border-white/50 backdrop-blur-sm p-4 text-black font-sf-pro text-lg resize-none shadow-xl placeholder:text-black/40 focus:outline-none"
          placeholder="Enter food items here, one per line..."
        ></textarea>
        <button className="bg-[#56BECC]/80 hover:bg-[#56BECC] transition-colors backdrop-blur-sm text-white font-sf-pro font-semibold py-3 px-8 rounded-xl shadow-xl">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ManualInputPopup;
