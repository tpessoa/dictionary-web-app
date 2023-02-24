import React from "react";

type SeparatorProps = {
  label: string;
};

const Separator = ({ label }: SeparatorProps) => {
  return (
    <div className="flex my-8 w-full space-x-4 h-6">
      <span className="flex items-center font-bold font-serif text-lg">
        {label}
      </span>
      <div className="flex items-center h-full grow">
        <hr className="w-full"></hr>
      </div>
    </div>
  );
};

export default Separator;
