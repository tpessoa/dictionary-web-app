import React from "react";
import Separator from "./Separator";
import { Meaning } from "@/types/dictionaryapi";

const Meaning = ({ partOfSpeech, definitions, synonyms }: Meaning) => {
  return (
    <>
      <Separator label={partOfSpeech} />
      <div className="text-gray-500 text-lg dark:text-neutral-600">Meaning</div>
      <ul className="mx-6 md:mx-10 my-6">
        {definitions?.map((elem, index) => (
          <li
            className="list-disc text-purple-500 dark:text-purple-500/80"
            key={index}
          >
            <div className="text-black dark:text-white break-words">
              {elem.definition}
            </div>
            {elem.example && (
              <div className="dark:text-neutral-600 text-neutral-600/50 mt-2 mb-4">{`"${elem.example}"`}</div>
            )}
          </li>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className="flex space-x-6">
          <div className="text-gray-500 text-lg dark:text-neutral-600">
            Synonyms
          </div>
          <div className="flex flex-wrap text-purple-500 text-lg font-bold dark:text-purple-500/80 break-words">
            {synonyms.map((synonym, index) => (
              <div key={index} className="mr-3">
                {synonym}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Meaning;
