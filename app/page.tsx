"use client";

import Input from "@/components/Input";
import Meaning from "@/components/Meaning";
import { DictionaryAPI } from "@/types/dictionaryapi";
import { useEffect, useState } from "react";
import { RiPlayFill } from "react-icons/ri";

export default function Home() {
  const [data, setData] = useState<DictionaryAPI[]>([]);
  const [isLoading, setLoading] = useState(false);

  const changeWord = (word: string) => {
    setLoading(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((data: DictionaryAPI[]) => {
        setData(data);
        setLoading(false);
      });
  };

  const response = data[0];

  return (
    <div>
      <Input changeWord={changeWord} />
      {response?.word && (
        <>
          <div className="relative mt-8 w-full">
            <div className="flex-col space-y-2">
              <span className="text-5xl font-bold">{response?.word}</span>
              <div className="text-purple-500 font-medium text-xl">
                {response?.phonetic}
              </div>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-center w-16 h-16 bg-purple-400/30 rounded-full relative">
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
              <div className="text-gray-500">Source</div>
              <div>
                <a
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
