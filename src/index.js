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
    pt: (value) => value * (72 / 96),
    pc: (value) => value / 16,
    q: (value) => value * 4,
  },
  in: {
    px: (value, props) => value * 96,
    rem: (value, props) => (value * 96) / props.rootFontSize,
    em: (value, props) => (value * 96) / props.baseFontSize,
    "%": (value, props) => ((value * 96) / props.baseFontSize) * 100,
    vw: (value, props) => ((value * 96) / props.viewPortWidth) * 100,
    vh: (value, props) => ((value * 96) / props.viewPortHeight) * 100,
    vmin: (value, props) => ((value * 96) / props.minViewPortSize) * 100,
    vmax: (value, props) => ((value * 96) / props.maxViewPortSize) * 100,
    ch: (value, props) => (value * 96) / props.chFontSize,
    cm: (value) => value * 2.54,
    mm: (value) => value * 25.4,
    pt: (value) => value * 72,
    pc: (value) => value * 6,
    q: (value) => value * 101.6,
  },
  pc: {
    px: (value) => value * 16,
    rem: (value, props) => (value * 16) / props.rootFontSize,
    em: (value, props) => (value * 16) / props.baseFontSize,
    "%": (value, props) => (value * 16 * 100) / props.baseFontSize, 
    vw: (value, props) => (value * 16) / props.viewPortWidth * 100, 
    vh: (value, props) => (value * 16) / props.viewPortHeight * 100,
    vmin: (value, props) => (value * 16) / Math.min(props.viewPortWidth, props.viewPortHeight) * 100,
    vmax: (value, props) => (value * 16) / Math.max(props.viewPortWidth, props.viewPortHeight) * 100,
    ch: (value, props) => (value * 16) / props.chFontSize,
    cm: (value) => (value * 16) / 37.7952755906, 
    mm: (value) => value * 4.233333333,
    in: (value) => (value * 16) / 96,
    pt: (value) => value * 16 * 0.75,
    q: (value) => value * 16.933333332
  },
  pt: {
    px:(value) => value * (96 / 72),
    rem: (value, props) => (value * (96 / 72)) / props.rootFontSize,
    em: (value, props) => (value * (96 / 72)) / props.baseFontSize,
    "%": (value, props) => ((value * (96 / 72)) / props.baseFontSize) * 100,
    vw: (value, props) => ((value * (96 / 72)) / props.viewPortWidth) * 100,
    vh: (value, props) => ((value * (96 / 72)) / props.viewPortHeight) * 100,
    vmin: (value, props) => ((value * (96 / 72)) / props.minViewPortSize) * 100,
    vmax: (value, props) => ((value * (96 / 72)) / props.maxViewPortSize) * 100,
    ch: (value, props) => (value * (96 / 72)) / props.chFontSize,
    cm: (value) => value * 0.035277778 , 
    mm: (value) => value * 0.352777778,
    in: (value) => value / 72,
    pc: (value) => value / 12,
    q: (value) => value * 1.411111111 
  },
  ch: {
    px: (value, props) => value * props.chFontSize,
    rem: (value, props) => (value * props.chFontSize) / props.rootFontSize,
    em: (value, props) => (value * props.chFontSize) / props.baseFontSize,
    '%': (value, props) => ((value * props.chFontSize) / props.baseFontSize) * 100,
    vw: (value, props) => ((value * props.chFontSize) / props.viewPortWidth) * 100,
    vh: (value, props) => ((value * props.chFontSize) / props.viewPortHeight) * 100,
    vmin: (value, props) => ((value * props.chFontSize) / props.minViewPortSize) * 100,
    vmax: (value, props) => ((value * props.chFontSize) / props.maxViewPortSize) * 100,
    in: (value, props) => (value * props.chFontSize) / 96,
    cm: (value, props) => (value * props.chFontSize) / 37.7952755906,
    mm: (value, props) => (value * props.chFontSize) / 3.77952755906,
    pt: (value, props) => (value * props.chFontSize) * 0.75,
    pc: (value, props) => (value * props.chFontSize) / 16,
    q: (value, props) => (value * props.chFontSize * 40) / 37.7952755906,
  },
  cm: {
    px: (value) => value * (96 / 2.54),
    rem: (value, props) => (value * (96 / 2.54)) / props.rootFontSize,
    em: (value, props) => (value * (96 / 2.54)) / props.baseFontSize,
    '%': (value, props) => ((value * (96 / 2.54)) / props.baseFontSize) * 100,
    vw: (value, props) => ((value * (96 / 2.54)) / props.viewPortWidth) * 100,
    vh: (value, props) => ((value * (96 / 2.54)) / props.viewPortHeight) * 100,
    vmin: (value, props) => ((value * (96 / 2.54)) / props.minViewPortSize) * 100,
    vmax: (value, props) => ((value * (96 / 2.54)) / props.maxViewPortSize) * 100,
    in: (value) => value / 2.54,
    pt: (value) => value * 28.3464566929, 
    pc: (value) => value * 2.3622047244,
    ch: (value, props) => (value * (96 / 2.54)) / props.chFontSize,
    mm: (value) => value * 10,
    q: (value) => value * 40,
  },
  mm: {
    px: (value, props) => (value * 96) / 25.4,
    rem: (value, props) => (value * 96) / 25.4 / props.rootFontSize,
    em: (value, props) => (value * 96) / 25.4 / props.baseFontSize,
    "%": (value, props) => ((value * (96 / 25.4)) / props.baseFontSize) * 100,
    vw: (value, props) => (value * 96) / 25.4 / props.viewPortWidth * 100,
    vh: (value, props) => (value * 96) / 25.4 / props.viewPortHeight * 100,    
    vmin: (value, props) => (value * 96) / 25.4 / props.minViewPortSize * 100,
    vmax: (value, props) => (value * 96) / 25.4 / props.maxViewPortSize * 100,
    in: (value, props) => value / 25.4,
    pt: (value, props) => value * 2.8346456693,
    pc: (value, props) => value * 0.2362204724,
    ch: (value, props) => (value * 96) / 25.4 / props.chFontSize,
    cm: (value, props) => value / 10,
    q: (value) => value * 4,
  },
  q: {
    px: (value) => (value * 25.4) / 96,
    rem: (value, props) => (value * 25.4) / 96 / props.rootFontSize,
    em: (value, props) => (value * 25.4) / 96 / props.baseFontSize,
    "%": (value, props) => ((value * 25.4) / (96 * props.baseFontSize)) * 100,
    vw: (value, props) => (value * 25.4) / 96 / props.viewPortWidth * 100,
    vh: (value, props) => (value * 25.4) / 96 / props.viewPortHeight * 100,
    vmin: (value, props) => ((value * 25.4) / 96 / props.minViewPortSize) * 100,
    vmax: (value, props) => ((value * 25.4) / 96 / props.maxViewPortSize) * 100,
    ch: (value, props) => (value * 25.4) / 96 / props.chFontSize,
    cm: (value) => value / 40,
    mm: (value) => value / 4,
    in: (value) => value / 101.6,
    pt: (value) => value * 0.75,
    pc: (value) => (value * 25.4) / 96 / 12
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
    cm: (value, props) => (value * props.rootFontSize) / 37.7952755906,
    mm: (value, props) => (value * props.rootFontSize) / 3.77952755906,
    in: (value, props) => (value * props.rootFontSize) / 96,
    pt: (value, props) => (value * props.rootFontSize) * 0.75,
    pc: (value, props) => (value * props.rootFontSize) / 16,
    q: (value, props) => (value * props.rootFontSize * 40) / 37.7952755906,
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
    cm: (value, props) => (value * props.baseFontSize) / 37.7952755906,
    mm: (value, props) => (value * props.baseFontSize) / 3.77952755906,
    in: (value, props) => (value * props.baseFontSize) / 96,
    pt: (value, props) => (value * props.baseFontSize) * 0.75,
    pc: (value, props) => (value * props.baseFontSize) / 16,
    q: (value, props) => (value * props.baseFontSize * 40) / 37.7952755906,
  },
  "%": {
  px: (value, props) => (value / 100) * props.baseFontSize,
  rem: (value, props) => (value / 100) * (props.baseFontSize / props.rootFontSize),
  em: (value, props) => (value / 100), 
  vw: (value, props) => (value / 100) * props.viewPortWidth, 
  vh: (value, props) => (value / 100) * props.viewPortHeight,
  vmin: (value, props) => (value / 100) * props.minViewPortSize, 
  vmax: (value, props) => (value / 100) * props.maxViewPortSize, 
  ch: (value, props) => (value / 100) * props.chFontSize,
  cm: (value) => (value / 100) * 37.7952755906,
  mm: (value,props) => (value / 100) * props.baseFontSize * 3.77952755906,
  in: (value) => (value / 100) * 0.96,
  pt: (value) => (value / 100) * 0.75,
  pc: (value) => (value / 100) * 0.05,
  q: (value, props) => (value / 100) * (props.baseFontSize * 40) / 25.4
  },
  vw: {
    px: (value, props) => (value / 100) * props.viewPortWidth,
    rem: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.rootFontSize,
    em: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.baseFontSize,
    "%": (value,props) => ((value * props.viewPortWidth) / 100 / props.baseFontSize) * 100,
    vh: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.viewPortHeight * 100,
    vmin: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.minViewPortSize * 100,
    vmax: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.maxViewPortSize * 100,
    ch: (value, props) =>
      ((value / 100) * props.viewPortWidth) / props.chFontSize,
    cm: (value, props) => ((value / 100) * props.viewPortWidth) / 37.7953,
    mm: (value, props) => (value  * props.viewPortWidth / 100) * 0.2645833333,
    in: (value, props) => ((value / 100) * props.viewPortWidth) / 96,
    pt: (value, props) => ((value / 100) * props.viewPortWidth) / 1.33333,
    pc: (value, props) => ((value / 100) * props.viewPortWidth) / 16,
    q: (value, props) => (value * props.viewPortWidth * 40) / (100 * 25.4)
  },
  vh: {
    px: (value, props) => (value / 100) * props.viewPortHeight,
    rem: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.rootFontSize,
    em: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.baseFontSize,
    "%": (value,props) => ((value * props.viewPortHeight) / 100 / props.baseFontSize) * 100,
    vw: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.viewPortWidth * 100,
    vmin: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.minViewPortSize  * 100,
    vmax: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.maxViewPortSize * 100,
    ch: (value, props) =>
      ((value / 100) * props.viewPortHeight) / props.chFontSize,
    cm: (value, props) => ((value / 100) * props.viewPortHeight) / 37.7953,
    mm: (value, props) => (value  * props.viewPortHeight / 100) * 0.2645833333,
    in: (value, props) => ((value / 100) * props.viewPortHeight) / 96,
    pt: (value, props) => ((value / 100) * props.viewPortHeight) / 1.33333,
    pc: (value, props) => ((value / 100) * props.viewPortHeight) / 16,
    q: (value, props) => (value * props.viewPortHeight * 40) / (100 * 25.4)
  },
  vmin: {
    px: (value, props) => (value / 100) * props.minViewPortSize,
    rem: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.rootFontSize,
    em: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.baseFontSize,
    "%": (value,props) => ((value * props.minViewPortSize) / 100 / props.baseFontSize) * 100,  
    vw: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.viewPortWidth * 100,
    vh: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.viewPortHeight * 100,
    vmax: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.maxViewPortSize * 100,
    ch: (value, props) =>
      ((value / 100) * props.minViewPortSize) / props.chFontSize,
    cm: (value, props) => ((value / 100) * props.minViewPortSize) / 37.7953,
    mm: (value, props) => ((value / 100) * props.minViewPortSize) / 3.77953,
    in: (value, props) => ((value / 100) * props.minViewPortSize) / 96,
    pt: (value, props) => ((value / 100) * props.minViewPortSize) / 1.33333,
    pc: (value, props) => ((value / 100) * props.minViewPortSize) / 16,
    q: (value, props) => (value * props.minViewPortSize * 40) / (100 * 25.4)
  },
  vmax: {
    px: (value, props) => (value / 100) * props.maxViewPortSize,
    rem: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.rootFontSize,
    em: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.baseFontSize,
    "%": (value,props) => ((value * props.maxViewPortSize) / 100 / props.baseFontSize) * 100,  
    vw: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.viewPortWidth  * 100,
    vh: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.viewPortHeight * 100,
    vmin: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.minViewPortSize * 100,
    ch: (value, props) =>
      ((value / 100) * props.maxViewPortSize) / props.chFontSize,
    cm: (value, props) => ((value / 100) * props.maxViewPortSize) / 37.7953,
    mm: (value, props) => ((value / 100) * props.maxViewPortSize) / 3.77953,
    in: (value, props) => ((value / 100) * props.maxViewPortSize) / 96,
    pt: (value, props) => ((value / 100) * props.maxViewPortSize) / 1.33333,
    pc: (value, props) => ((value / 100) * props.maxViewPortSize) / 16,
    q: (value, props) => (value * props.maxViewPortSize * 40) / (100 * 25.4)
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
    s: (value) => value / 1000,
  },
};

/**
 * Converts a value from one CSS unit to another.
 *
 * @param {number} value - The value to convert.
 * @param { "px" | "rem" | "em" | "%" | "vw" | "vh" | "vmin" | "vmax" | "ch" | "cm" | "in" | "mm" | "pt" | "pc" | "q" } targetUnit - The target CSS unit to convert to.
 * @param { "px" | "rem" | "em" | "%" | "vw" | "vh" | "vmin" | "vmax" | "ch" | "cm" | "in" | "mm" | "pt" | "pc" | "q" } sourceUnit - The source CSS unit to convert from.
 * @param {boolean | number} [precision=false] - The precision of the converted value. If set to a number, rounds the value to that number of decimal places.
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

module.exports = (
  value,
  sourceUnit,
  targetUnit,
  precision = false,
  {
    rootFontSize = 16,
    baseFontSize = 16,
    chFontSize = chSize,
    viewPortWidth = viewWidth,
    viewPortHeight = viewHeight,
    minViewPortSize = Math.min(viewPortWidth, viewPortHeight),
    maxViewPortSize = Math.max(viewPortWidth, viewPortHeight),
  } = {}
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
  if (!conversion.hasOwnProperty(sourceUnit)) {
    throw new Error(
      `Source unit "${sourceUnit}" does not exist in the conversion map. Please ensure it's a valid unit.`
    );
  }
  if (!conversion[sourceUnit].hasOwnProperty(targetUnit)) {
    throw new Error(
      `Conversion from "${sourceUnit}" to "${targetUnit}" is not supported. Please check the available units and conversion rules.`
    );
  }
  const converted = conversion[sourceUnit][targetUnit](value, props);

  if (precision !== false) {
    precision = Math.pow(10, parseInt(precision) || 5);
    return Math.round(converted * precision) / precision;
  }

  return converted;
};