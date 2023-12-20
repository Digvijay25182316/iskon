import React from "react";

function SubmitButtonForms({
  isLoading,
  buttonStyles,
  content,
  containerStyles,
}) {
  return (
    <div className={containerStyles}>
      <button disabled={isLoading} className={buttonStyles} type="submit">
        {content}
      </button>
    </div>
  );
}

export default SubmitButtonForms;
