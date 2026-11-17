"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-2">ERROR!!!</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {error.message ||
          "An unexpected error occurred while processing your request."}
      </p>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Try again
      </button>
    </div>
  );
}
