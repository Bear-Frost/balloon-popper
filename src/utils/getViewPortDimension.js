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

export { getViewPortDimension };
