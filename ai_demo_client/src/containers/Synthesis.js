import React from "react";
import TTSTextbox from "../components/Synthesis/TTSTextbox";
import TTSOptions from "../components/Synthesis/TTSOptions";
import TTSButton from "../components/Synthesis/TTSButton";

const Synthesis = () => {
  return (
    <div>
      <TTSTextbox></TTSTextbox>
      <TTSOptions></TTSOptions>
      <TTSButton></TTSButton>
    </div>
  );
};

export default Synthesis;
