import React, { Dispatch, SetStateAction, useState } from "react";
import { BiSearch } from "react-icons/bi";

type InputProps = {
  changeWord: (word: string) => void;
};

const Input = ({ changeWord }: InputProps) => {
  const [value, setValue] = useState<string>();

  return (
    <div className="flex bg-neutral-100 rounded-xl w-full p-4 gap-2 dark:bg-neutral-800">
      <input
        className="bg-transparent w-full focus:outline-none font-bold dark:text-white"
        onChange={(ev) => setValue(ev.target.value)}
      />
      <button className="flex items-center text-purple-500 dark:text-purple-500/50">
        <BiSearch
          className="h-6 w-6"
          onClick={() => changeWord(value!)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              changeWord(value!);
            }
          }}
        />
      </button>
    </div>
  );
};

export default Input;
