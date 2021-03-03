import React from "react";

const TTSTextbox = () => {
  return (
    <div>
      <textarea
        id="textarea"
        rows="1"
        autocomplete="off"
        autocapitalize="none"
        placeholder="This is Text area for synthesis"
        aria-describedby=""
        aria-labelledby="paper-input-label-1"
      ></textarea>
    </div>
  );
};

export default TTSTextbox;
