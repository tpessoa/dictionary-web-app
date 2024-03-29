import React, { useState } from "react";
import { RiPlayFill } from "react-icons/ri";

type TextToSpeechProps = {
  text: string;
};

const TextToSpeech = ({ text }: TextToSpeechProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const synth = window.speechSynthesis;
  const speak = () => {
    if (synth.speaking) {
      console.error("Already speaking...");
      return;
    }

    if (text) {
      const speakText = new SpeechSynthesisUtterance(text);

      speakText.onend = (e) => {
        console.log("Done speaking...", e);
        setIsSpeaking(false);
      };

      speakText.onerror = (e) => {
        console.log("Something went wrong.", e);
        setIsSpeaking(false);
      };
      // "Microsoft Zira - English (United States)"
      speakText.voice = synth.getVoices().at(2)!;

      synth.speak(speakText);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="absolute top-1/2 right-0 transform md:-translate-x-1/2 -translate-y-1/2">
      <button
        className="flex justify-center w-16 h-16 bg-purple-400/30 dark:bg-purple-400/10 rounded-full relative"
        disabled={isSpeaking}
        onClick={speak}
      >
        <RiPlayFill className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 w-8 h-8" />
      </button>
    </div>
  );
};

export default TextToSpeech;
