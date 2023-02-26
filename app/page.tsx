"use client";

import Input from "@/components/Input";
import Meaning from "@/components/Meaning";
import TextToSpeech from "@/components/TextToSpeech";
import { DictionaryAPI } from "@/types/dictionaryapi";
import { useState } from "react";

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
      .catch((error) => {
        setIsError(true);
        setData([]);
      });
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
              <span className="text-3xl md:text-5xl font-bold dark:text-white">
                {response?.word}
              </span>
              <div className="text-purple-500 font-medium text-lg md:text-xl dark:text-purple-500/80">
                {response?.phonetic}
              </div>
            </div>
            <TextToSpeech text={response?.word} />
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
                  className="dark:text-white truncate block max-w-max"
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
