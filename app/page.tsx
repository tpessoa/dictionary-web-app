"use client";

import Input from "@/components/Input";
import Meaning from "@/components/Meaning";
import { DictionaryAPI } from "@/types/dictionaryapi";
import { useEffect, useState } from "react";
import { RiPlayFill } from "react-icons/ri";

export default function Home() {
  const [data, setData] = useState<DictionaryAPI[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const changeWord = (word: string) => {
    setLoading(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + res.status);
        }
      })
      .then((data: DictionaryAPI[]) => {
        setData(data);
        setIsError(false);
        setLoading(false);
      })
      .catch((error) => setIsError(true));
  };

  const response = data[0];

  return (
    <div>
      <Input changeWord={changeWord} />
      {isError && (
        <div className="text-purple-500 font-medium text-xl dark:text-purple-500/80 mx-4 my-8">
          This term is not included in the dictionary.
        </div>
      )}
      {response?.word && (
        <>
          <div className="relative mt-8 w-full">
            <div className="flex-col space-y-2">
              <span className="text-5xl font-bold dark:text-white">
                {response?.word}
              </span>
              <div className="text-purple-500 font-medium text-xl dark:text-purple-500/80">
                {response?.phonetic}
              </div>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-center w-16 h-16 bg-purple-400/30 dark:bg-purple-400/10 rounded-full relative">
                <RiPlayFill className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 w-8 h-8" />
              </div>
            </div>
          </div>
          {response?.meanings.map((meaning, index) => (
            <Meaning key={index} {...meaning} />
          ))}
          <div className="pt-4">
            <hr className="w-full"></hr>
            <div className="flex text-sm space-x-4 mt-4">
              <div className="text-neutral-500">Source</div>
              <div>
                <a
                  className="dark:text-white"
                  target="_blank"
                  href={`https://en.wiktionary.org/wiki/${response?.word}`}
                >
                  <u>{`https://en.wiktionary.org/wiki/${response?.word}`}</u>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
