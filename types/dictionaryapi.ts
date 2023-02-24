type Antonym = {
  antonym: string;
};

type Definition = {
  definition: string;
  example: string;
};

export type Meaning = {
  antonyms: Antonym[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

export type DictionaryAPI = {
  meanings: Meaning[];
  phonetic: string;
  word: string;
};
