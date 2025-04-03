import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

export function NoticeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="max-w-screen-lg mx-auto py-3 px-4 lg:px-0">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-yellow-100">
              <AlertCircle className="h-6 w-6 text-yellow-700" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-yellow-800">
              This website is currently under development.
              <span className="inline md:block text-xs text-yellow-700 ml-2 md:ml-0">March 04, 2025</span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="cursor-pointer ml-4 flex-shrink-0 rounded-md p-1 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            aria-label="Close notice"
          >
            <X className="h-5 w-5 text-yellow-700" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
} 