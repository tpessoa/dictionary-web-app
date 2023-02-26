import React, { Dispatch, SetStateAction, useState } from "react";
import { BiSearch } from "react-icons/bi";

type InputProps = {
  changeWord: (word: string) => void;
};

const Input = ({ changeWord }: InputProps) => {
  const [value, setValue] = useState<string>();

  return (
    <form
      className="flex bg-neutral-100 rounded-2xl w-full p-4 gap-2 dark:bg-neutral-800 m-auto"
      onSubmit={(e) => {
        e.preventDefault();
        changeWord(value!);
      }}
    >
      <input
        className="bg-transparent w-full focus:outline-none font-bold dark:text-white"
        onChange={(ev) => setValue(ev.target.value)}
      />
      <button
        type="submit"
        className="flex items-center text-purple-500 dark:text-purple-500/50"
      >
        <BiSearch className="h-6 w-6" />
      </button>
    </form>
  );
};

export default Input;
