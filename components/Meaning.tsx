import React from "react";
import Separator from "./Separator";
import { Meaning } from "@/types/dictionaryapi";

const Meaning = ({ partOfSpeech, definitions, synonyms }: Meaning) => {
  return (
    <>
      <Separator label={partOfSpeech} />
      <div className="text-gray-500 text-lg dark:text-neutral-600">Meaning</div>
      <ul className="mx-10 my-6">
        {definitions?.map((elem, index) => (
          <li
            className="list-disc text-purple-500 dark:text-purple-500/80"
            key={index}
          >
            <div className="text-black dark:text-white">{elem.definition}</div>
            {elem.example && (
              <div className="text-neutral-600 mt-2">{`"${elem.example}"`}</div>
            )}
          </li>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className="flex space-x-6">
          <div className="text-gray-500 text-lg dark:text-neutral-600">
            Synonyms
          </div>
          <div className="flex space-x-3 text-purple-500 text-lg font-bold dark:text-purple-500/80">
            {synonyms.map((synonym, index) => (
              <div key={index}>{synonym}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Meaning;
