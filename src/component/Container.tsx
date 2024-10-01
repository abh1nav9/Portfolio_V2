import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`p-4 rounded-md border border-[rgba(200,200,200,0.6)] bg-white shadow-sm transition-shadow duration-300 ease-in-out 
        hover:shadow-[8px_8px_0px_3px_rgba(238,108,77,1)] 
        bg-[url('/path/to/paper-texture.png')] bg-cover ${className}`}
      style={{
        backgroundBlendMode: "multiply",
        backgroundColor: "#F9F5E3",
      }}
    >
      <div
        className="p-3 border border-[rgba(0,0,0,0.1)] bg-[rgba(255,245,157,0.8)] 
        bg-gradient-to-r from-yellow-300 to-yellow-200 text-gray-800"
        style={{
          boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;