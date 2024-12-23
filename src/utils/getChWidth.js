/**
 * Get the Character Width based on the character 0.
 * This function creates a temporary span element, sets its content to '0',
 * and measures its width to determine the width of the character '0'.
 * The function ensures that the span element is properly removed from the DOM after measurement.
 *
 * @returns {number} The width of the character 0 in pixels. If the document or window object is not valid, returns 0.
 */
const getChWidth = () => {
  const isDocumentValid =
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement === "function";

  if (!isDocumentValid) return 0;

  const letterElement = window.document.createElement("span");
  letterElement.style.visibility = "hidden";
  letterElement.style.position = "absolute";
  letterElement.style.whiteSpace = "nowrap";
  letterElement.textContent = "0";

  window.document.body.appendChild(letterElement);

  const chWidth = letterElement.getBoundingClientRect().width;

  window.document.body.removeChild(letterElement);

  return chWidth;
};

export { getChWidth };
