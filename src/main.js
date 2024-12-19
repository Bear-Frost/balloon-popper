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

const conversion = {
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
    q: (value) => value * 4,
  },
  in: {
    px: (value, props) => value * 96,
    rem: (value, props) => (value * 96) / props.rootFontSize,
    em: (value, props) => (value * 96) / props.baseFontSize,
    "%": (value, props) => ((value * 96) / props.baseFontSize) * 100,
    vw: (value, props) => (value * 96) / props.viewPortWidth,
    vh: (value, props) => (value * 96) / props.viewPortHeight,
    vmin: (value, props) => (value * 96) / props.minViewPortSize,
    vmax: (value, props) => (value * 96) / props.maxViewPortSize,
    ch: (value, props) => (value * 96) / props.chSize,
    cm: (value, props) => (value * 96) / 2.54,
    mm: (value, props) => (value * 96) / 25.4,
    pt: (value, props) => (value * 96) / 72,
    pc: (value, props) => (value * 96) / 12,
    q: (value) => value * 101.6,
  },
  pc: {
    px: (value, props) => (value * 96) / 12,
    rem: (value, props) => (value * 96) / 12 / props.rootFontSize,
    em: (value, props) => (value * 96) / 12 / props.baseFontSize,
    "%": (value, props) => ((value * 96) / 12 / props.baseFontSize) * 100,
    vw: (value, props) => (value * 96) / 12 / props.viewPortWidth,
    vh: (value, props) => (value * 96) / 12 / props.viewPortHeight,
    vmin: (value, props) => (value * 96) / 12 / props.minViewPortSize,
    vmax: (value, props) => (value * 96) / 12 / props.maxViewPortSize,
    ch: (value, props) => (value * 96) / 12 / props.chSize,
    cm: (value, props) => (value * 96) / 12 / 2.54,
    mm: (value, props) => (value * 96) / 12 / 25.4,
    in: (value, props) => value / 12,
    pt: (value, props) => value * 12,
    q: (value) => value * 48,
  },
  pt: {
    px: (value, props) => (value * 96) / 72,
    rem: (value, props) => (value * 96) / 72 / props.rootFontSize,
    em: (value, props) => (value * 96) / 72 / props.baseFontSize,
    "%": (value, props) => ((value * 96) / 72 / props.baseFontSize) * 100,
    vw: (value, props) => (value * 96) / 72 / props.viewPortWidth,
    vh: (value, props) => (value * 96) / 72 / props.viewPortHeight,
    vmin: (value, props) => (value * 96) / 72 / props.minViewPortSize,
    vmax: (value, props) => (value * 96) / 72 / props.maxViewPortSize,
    ch: (value, props) => (value * 96) / 72 / props.chSize,
    cm: (value, props) => (value * 96) / 72 / 2.54,
    mm: (value, props) => (value * 96) / 72 / 25.4,
    in: (value, props) => (value * 1) / 72,
    pc: (value, props) => value / 12,
    q: (value) => value * 1.33333 * 4,
  },
  ch: {
    px: (value, props) => value * props.chSize,
    rem: (value, props) => (value * props.chSize) / props.rootFontSize,
    em: (value, props) => (value * props.chSize) / props.baseFontSize,
    "%": (value, props) => ((value * props.chSize) / props.baseFontSize) * 100,
    vw: (value, props) => (value * props.chSize) / props.viewPortWidth,
    vh: (value, props) => (value * props.chSize) / props.viewPortHeight,
    vmin: (value, props) => (value * props.chSize) / props.minViewPortSize,
    vmax: (value, props) => (value * props.chSize) / props.maxViewPortSize,
    in: (value, props) => (value * props.chSize) / 96,
    pc: (value, props) => (value * props.chSize) / 12,
    pt: (value, props) => (value * props.chSize) / 72,
    cm: (value, props) => (value * props.chSize) / 2.54,
    mm: (value, props) => (value * props.chSize) / 25.4,
    q: (value, props) => (value * props.chSize * 4) / 25.4,
  },
  cm: {
    px: (value, props) => (value * 96) / 2.54,
    rem: (value, props) => (value * 96) / 2.54 / props.rootFontSize,
    em: (value, props) => (value * 96) / 2.54 / props.baseFontSize,
    "%": (value, props) => ((value * 96) / 2.54 / props.baseFontSize) * 100,
    vw: (value, props) => (value * 96) / 2.54 / props.viewPortWidth,
    vh: (value, props) => (value * 96) / 2.54 / props.viewPortHeight,
    vmin: (value, props) => (value * 96) / 2.54 / props.minViewPortSize,
    vmax: (value, props) => (value * 96) / 2.54 / props.maxViewPortSize,
    in: (value, props) => value / 2.54,
    pt: (value, props) => (value * 96) / 72 / 2.54,
    pc: (value, props) => (value * 96) / 2.54 / 12,
    ch: (value, props) => (value * 96) / 2.54 / props.chSize,
    mm: (value, props) => (value * 96) / 25.4,
    q: (value) => value * 40,
  },
  mm: {
    px: (value, props) => (value * 96) / 25.4,
    rem: (value, props) => (value * 96) / 25.4 / props.rootFontSize,
    em: (value, props) => (value * 96) / 25.4 / props.baseFontSize,
    "%": (value, props) => ((value * 96) / 25.4 / props.baseFontSize) * 100,
    vw: (value, props) => (value * 96) / 25.4 / props.viewPortWidth,
    vh: (value, props) => (value * 96) / 25.4 / props.viewPortHeight,
    vmin: (value, props) => (value * 96) / 25.4 / props.minViewPortSize,
    vmax: (value, props) => (value * 96) / 25.4 / props.maxViewPortSize,
    in: (value, props) => value / 25.4,
    pt: (value, props) => (value * 96) / 72 / 25.4,
    pc: (value, props) => (value * 96) / 25.4 / 12,
    ch: (value, props) => (value * 96) / 25.4 / props.chSize,
    cm: (value, props) => value / 10,
    q: (value) => value * 4,
  },
  q: {
    px: (value, props) => ((value / 4) * 96) / 25.4,
    rem: (value, props) => ((value / 4) * 96) / 25.4 / props.rootFontSize,
    em: (value, props) => ((value / 4) * 96) / 25.4 / props.baseFontSize,
    "%": (value, props) =>
      (((value / 4) * 96) / 25.4 / props.baseFontSize) * 100,
    vw: (value, props) => ((value / 4) * 96) / 25.4 / props.viewPortWidth,
    vh: (value, props) => ((value / 4) * 96) / 25.4 / props.viewPortHeight,
    vmin: (value, props) => ((value / 4) * 96) / 25.4 / props.minViewPortSize,
    vmax: (value, props) => ((value / 4) * 96) / 25.4 / props.maxViewPortSize,
    ch: (value, props) => ((value / 4) * 96) / 25.4 / props.chSize,
    cm: (value, props) => value / 4 / 10,
    mm: (value, props) => value / 4,
    in: (value, props) => value / 4 / 25.4,
    pt: (value, props) => ((value / 4) * 96) / 25.4 / 72,
    pc: (value, props) => ((value / 4) * 96) / 25.4 / 12,
  },
  rem: {
    px: (value, props) => value * props.rootFontSize,
    em: (value, props) => (value * props.rootFontSize) / props.baseFontSize,
    "%": (value, props) =>
      ((value * props.rootFontSize) / props.baseFontSize) * 100,
    vw: (value, props) =>
      ((value * props.rootFontSize) / props.viewPortWidth) * 100,
    vh: (value, props) =>
      ((value * props.rootFontSize) / props.viewPortHeight) * 100,
    vmin: (value, props) =>
      ((value * props.rootFontSize) / props.minViewPortSize) * 100,
    vmax: (value, props) =>
      ((value * props.rootFontSize) / props.maxViewPortSize) * 100,
    ch: (value, props) => (value * props.rootFontSize) / props.chFontSize,
    cm: (value) => value * (37.7953 / 96),
    mm: (value) => value * (3.77953 / 96),
    in: (value) => value * (96 / 96),
    pt: (value) => value * (1.33333 / 96),
    pc: (value) => value * (16 / 96),
    q: (value, props) => (value * props.rootFontSize * 4) / 25.4,
  },
  em: {
    px: (value, props) => value * props.baseFontSize,
    rem: (value, props) => (value * props.baseFontSize) / props.rootFontSize,
    "%": (value, props) => value * 100,
    vw: (value, props) =>
      ((value * props.baseFontSize) / props.viewPortWidth) * 100,
    vh: (value, props) =>
      ((value * props.baseFontSize) / props.viewPortHeight) * 100,
    vmin: (value, props) =>
      ((value * props.baseFontSize) / props.minViewPortSize) * 100,
    vmax: (value, props) =>
      ((value * props.baseFontSize) / props.maxViewPortSize) * 100,
    ch: (value, props) => (value * props.baseFontSize) / props.chFontSize,
    cm: (value) => value * (37.7953 / 96),
    mm: (value) => value * (3.77953 / 96),
    in: (value) => value * (96 / 96),
    pt: (value) => value * (1.33333 / 96),
    pc: (value) => value * (16 / 96),
    q: (value, props) => (value * props.baseFontSize * 4) / 25.4,
  },
  "%": {
    px: (value, props) => (value / 100) * props.baseFontSize,
    rem: (value, props) =>
      (value / 100) * (props.baseFontSize / props.rootFontSize),
    em: (value, props) => value / 100,
    vw: (value, props) => (value / 100) * props.viewPortWidth,
    vh: (value, props) => (value / 100) * props.viewPortHeight,
    vmin: (value, props) => (value / 100) * props.minViewPortSize,
    vmax: (value, props) => (value / 100) * props.maxViewPortSize,
    ch: (value, props) => (value / 100) * props.chFontSize,
    cm: (value) => value * (37.7953 / 96),
    mm: (value) => value * (3.77953 / 96),
    in: (value) => value * (96 / 96),
    pt: (value) => value * (1.33333 / 96),
    pc: (value) => value * (16 / 96),
    q: (value, props) => ((value / 100) * props.baseFontSize * 4) / 25.4,
  },
  vw: {
    px: (value, props) => (value / 100) * props.viewPortWidth,
    rem: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.rootFontSize,
    em: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.baseFontSize,
    "%": (value) => value, // vw is directly percentage-based
    vh: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.viewPortHeight,
    vmin: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.minViewPortSize,
    vmax: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.maxViewPortSize,
    ch: (value, props) => ((value / 100) * props.viewPortWidth) / props.chSize,
    cm: (value, props) => ((value / 100) * props.viewPortWidth) / 37.7953,
    mm: (value, props) => ((value / 100) * props.viewPortWidth) / 3.77953,
    in: (value, props) => ((value / 100) * props.viewPortWidth) / 96,
    pt: (value, props) => ((value / 100) * props.viewPortWidth) / 1.33333,
    pc: (value, props) => ((value / 100) * props.viewPortWidth) / 16,
    q: (value, props) =>
      ((value / 100) * props.viewPortWidth * 4) / 25.4,
  },
  vh: {
    px: (value, props) => (value / 100) * props.viewPortHeight,
    rem: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.rootFontSize,
    em: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.baseFontSize,
    "%": (value) => value, // vh is directly percentage-based
    vw: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.viewPortWidth,
    vmin: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.minViewPortSize,
    vmax: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.maxViewPortSize,
    ch: (value, props) => ((value / 100) * props.viewPortHeight) / props.chSize,
    cm: (value, props) => ((value / 100) * props.viewPortHeight) / 37.7953,
    mm: (value, props) => ((value / 100) * props.viewPortHeight) / 3.77953,
    in: (value, props) => ((value / 100) * props.viewPortHeight) / 96,
    pt: (value, props) => ((value / 100) * props.viewPortHeight) / 1.33333,
    pc: (value, props) => ((value / 100) * props.viewPortHeight) / 16,
    q: (value, props) =>
      ((value / 100) * props.viewPortHeight * 4) / 25.4,
  },
  vmin: {
    px: (value, props) => (value / 100) * props.minViewPortSize,
    rem: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.rootFontSize,
    em: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.baseFontSize,
    "%": (value) => value, // vmin is directly percentage-based
    vw: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.viewPortWidth,
    vh: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.viewPortHeight,
    vmax: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.maxViewPortSize,
    ch: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.chSize,
    cm: (value, props) => ((value / 100) * props.minViewPortSize) / 37.7953,
    mm: (value, props) => ((value / 100) * props.minViewPortSize) / 3.77953,
    in: (value, props) => ((value / 100) * props.minViewPortSize) / 96,
    pt: (value, props) => ((value / 100) * props.minViewPortSize) / 1.33333,
    pc: (value, props) => ((value / 100) * props.minViewPortSize) / 16,
    q: (value, props) =>
      ((value / 100) * props.minViewPortSize * 4) / 25.4,
  },
  vmax: {
    px: (value, props) => (value / 100) * props.maxViewPortSize,
    rem: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.rootFontSize,
    em: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.baseFontSize,
    "%": (value) => value, // vmax is directly percentage-based
    vw: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.viewPortWidth,
    vh: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.viewPortHeight,
    vmin: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.minViewPortSize,
    ch: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.chSize,
    cm: (value, props) => ((value / 100) * props.maxViewPortSize) / 37.7953,
    mm: (value, props) => ((value / 100) * props.maxViewPortSize) / 3.77953,
    in: (value, props) => ((value / 100) * props.maxViewPortSize) / 96,
    pt: (value, props) => ((value / 100) * props.maxViewPortSize) / 1.33333,
    pc: (value, props) => ((value / 100) * props.maxViewPortSize) / 16,
    q: (value, props) =>
      ((value / 100) * props.maxViewPortSize * 4) / 25.4,
  },
  // angle units
  deg: {
    rad: (value) => value * (Math.PI / 180),
    grad: (value) => value * (400 / 360),
    turn: (value) => value / 360,
  },

  grad: {
    rad: (value) => value * (Math.PI / 200),
    deg: (value) => value * (360 / 400),
    turn: (value) => value / 400,
  },

  turn: {
    rad: (value) => value * (2 * Math.PI),
    deg: (value) => value * 360,
    grad: (value) => value * 400,
  },

  rad: {
    deg: (value) => value * (180 / Math.PI),
    grad: (value) => value * (200 / Math.PI),
    turn: (value) => value / (2 * Math.PI),
  },
  // resolution units
  dpi: {
    dpcm: (value) => value / 2.54,
    dppx: (value) => value / 96,
  },

  dpcm: {
    dpi: (value) => value * 2.54,
    dppx: (value) => (value * 2.54) / 96,
  },

  dppx: {
    dpi: (value) => value * 96,
    dpcm: (value) => (value * 96) / 2.54,
  },
  // time units
  s: {
    ms: (value) => value * 1000,
  },
  ms: {
    ms: (value) => value,
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
