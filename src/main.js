/**
 * Retrieves the width or height of the viewport based on the provided dimension.
 *
 * @param {"width" | "height"} [dimension="width"] - The dimension to retrieve. Can be either "width" or "height".
 * @returns {number} The width or height of the viewport in pixels. If the window object is not valid, returns 0.
 */
const getViewPortDimension = (dimension = "width") => {
  const isWindowValid =
    typeof window !== "undefined" &&
    typeof window.innerWidth === "number" &&
    typeof window.innerHeight === "number";

  if (!isWindowValid) return 0;

  return dimension === "width" ? window.innerWidth : window.innerHeight;
};

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
    typeof document !== "undefined" &&
    typeof document.createElement === "function" &&
    typeof window !== "undefined";

  if (!isDocumentValid) return 0;

  const letterElement = document.createElement("span");
  letterElement.style.visibility = "hidden";
  letterElement.style.position = "absolute";
  letterElement.style.whiteSpace = "nowrap";
  letterElement.textContent = "0";

  document.body.appendChild(letterElement);

  const chWidth = letterElement.getBoundingClientRect().width;

  document.body.removeChild(letterElement);

  return chWidth;
};

const viewWidth = getViewPortDimension("width");
const viewHeight = getViewPortDimension("height");
const chSize = getChWidth();

export const conversion = {
  px: {
    rem: (value, props) => value / props.rootFontSize,
    em: (value, props) => value / props.baseFontSize,
    "%": (value, props) => (value / props.baseFontSize) * 100,
    vw: (value, props) => (value / props.viewPortWidth) * 100,
    vh: (value, props) => (value / props.viewPortHeight) * 100,
    vmin: (value, props) => (value / props.minViewPortSize) * 100,
    vmax: (value, props) => (value / props.maxViewPortSize) * 100,
    ch: (value, props) => value / props.chFontSize,
    cm: (value) => value / 37.7953,
    mm: (value) => value / 3.77953,
    in: (value) => value / 96,
    pt: (value) => value / 1.33333,
    pc: (value) => value / 16,
  },
};

/**
 * Converts a value from one CSS unit to another.
 *
 * @param {number} value - The value to convert.
 * @param {string} targetUnit - The target CSS unit to convert to.
 * @param {string} sourceUnit - The source CSS unit to convert from.
 * @param {object} [options] - Optional parameters for the conversion.
 * @param {number} [options.rootFontSize=16] - The root font size used for rem conversion.
 * @param {number} [options.baseFontSize=16] - The base font size used for em conversion.
 * @param {number} [options.chFontSize=chSize] - The font size of the character '0' used for ch conversion.
 * @param {number} [options.viewPortWidth=viewWidth] - The width of the viewport.
 * @param {number} [options.viewPortHeight=viewHeight] - The height of the viewport.
 * @param {number} [options.minViewPortSize=Math.min(viewPortWidth, viewPortHeight)] - The minimum size of the viewport.
 * @param {number} [options.maxViewPortSize=Math.max(viewPortWidth, viewPortHeight)] - The maximum size of the viewport.
 * @returns {number} The converted value in the target CSS unit.
 * @throws {Error} If the target or source unit does not exist in the conversion unit.
 */

export const unitFlip = (
  value,
  targetUnit,
  sourceUnit,
  {
    rootFontSize = 16,
    baseFontSize = 16,
    chFontSize = chSize,
    viewPortWidth = viewWidth,
    viewPortHeight = viewHeight,
    minViewPortSize = Math.min(viewPortWidth, viewPortHeight),
    maxViewPortSize = Math.max(viewPortWidth, viewPortHeight),
  }
) => {
  const props = {
    rootFontSize,
    baseFontSize,
    chFontSize,
    viewPortWidth,
    viewPortHeight,
    minViewPortSize,
    maxViewPortSize,
  };
  if (!conversion.hasOwnProperty(targetUnit)) {
    throw new Error(
      `Target unit "${targetUnit}" does not exist in the conversion map. Please ensure it's a valid unit.`
    );
  }
  if (!conversion[targetUnit].hasOwnProperty(sourceUnit)) {
    throw new Error(
      `Conversion from "${sourceUnit}" to "${targetUnit}" is not supported. Please check the available units and conversion rules.`
    );
  }
  return conversion[targetUnit][sourceUnit](value, props);
};
