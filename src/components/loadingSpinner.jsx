"use client";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-5 h-5 border-4 border-gray-100 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
}
