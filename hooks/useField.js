import { useState } from "react";

/**
 * A generic field hook that handles the user input to the input field
 * @param {string} type the type of the field (e.g. text, number etc)
 * @param {function} valueCheckers incase you want to check against the input value (e.g. for error-handling)
 */
const useField = (type, valueCheckers = undefined) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(true);

  const onChange = (event) => {
    const newValue = event.target.value;
    let checks = [];
    if (valueCheckers) {
      valueCheckers.forEach((check) => {
        checks.push(check(newValue));
      });
    }
    setError(checks.filter((c) => c === false).length > 0 ? true : false);
    setValue(newValue);
  };

  const reset = () => {
    setValue("");
    setError(true);
  };

  return {
    type,
    value,
    onChange,
    error,
    reset,
  };
};

export default useField;