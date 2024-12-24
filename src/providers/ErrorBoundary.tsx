import React, { useEffect, useState } from "react";
import errorSvg from "../assets/error-boundary.svg";
const ErrorBoundary= ({children}:{
  children: React.ReactNode
}) => {
  const [mount, setMount] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      setError(e.error);
    };

    // Add error listener
    window.addEventListener("error", handleError);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, [mount]);

  // Reset error state when component is remounted
  useEffect(() => {
    setError(null);
    setMount(true);

    return () => {
      setMount(false);
    };
  }, []);

  // Render fallback UI when an error occurs
  if (error) {
    return (
      <div className="flex items-center justify-center flex-col gap-2 h-screen">
      <img src={errorSvg} alt="error"
      className="w-1/4" />
        <h2 className="text-main">
        <span>An error occurred</span>
        <a className="underline text-[12px] ml-4 cursor-pointer" href="/exchange">refresh</a>
        </h2>
        <p className="text-gray-100">{error?.message}</p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
