/**
 * Get the root line height value.
 *
 * @returns {number} The root line height value.
 */
function getRootLineHeight() {
  const isWindowValid =
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.getComputedStyle === "function";

  if (!isWindowValid) return 24; // default root line height value.
  const rootComputedStyle = window.getComputedStyle(window.document.documentElement);
  let rootLineHeightValue = rootComputedStyle.lineHeight;

  if (rootLineHeightValue === "normal") {
    const rootFontSize = parseFloat(rootComputedStyle.fontSize);
    const defaultLineHeightMultiplier = 1.5;

    return rootLineHeightValue = rootFontSize * defaultLineHeightMultiplier;
  }

  return rootLineHeightValue;
}

export { getRootLineHeight };
