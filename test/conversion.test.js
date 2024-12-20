const unitFlip = require("../src/main");

const unitConversion = [
  // value, expected value, target unit, source unit, precision, props

  // px unit conversion
  //   px -> rem
  [16, 1, "px", "rem", false],
  [32.5, 2.03, "px", "rem", 2],
  // px -> em
  [16, 1, "px", "em", false],
  [32, 1, "px", "em", 0, { baseFontSize: 32 }],
  // px -> %
  [16, 100, "px", "%", false],
  [31.5, 196.88, "px", "%", "2"],
  // px -> vw
  [16, 1.25, "px", "vw", false, { viewPortWidth: 1280 }],
  [31, 2.42, "px", "vw", 2, { viewPortWidth: 1280 }],
  // px -> vh
  [16, 2.1534320323014806, "px", "vh", false, { viewPortHeight: 743 }],
  [16, 2.15, "px", "vh", 2, { viewPortHeight: 743 }],
  // px -> vmin
  [
    16,
    2.1534320323014806,
    "px",
    "vmin",
    false,
    { viewPortWidth: 1280, viewPortHeight: 743 },
  ],
  [16, 2.15, "px", "vmin", 2, { viewPortWidth: 1280, viewPortHeight: 743 }],
  // px -> vmax
  [16, 1.25, "px", "vmax", false, { viewPortWidth: 1280, viewPortHeight: 743 }],
  [16, 1.25, "px", "vmax", 2, { viewPortWidth: 1280, viewPortHeight: 743 }],
  // px -> ch
  [16, 1, "px", "ch", false, { chFontSize: 16 }],
  [16, 1, "px", "ch", 2, { chFontSize: 16 }],
  // px -> cm
  [16, 0.42333305993073217, "px", "cm", false],
  [16, 0.42, "px", "cm", 2],
  // px -> mm
  [16, 4.233330599307322, "px", "mm", false],
  [16, 4.23, "px", "mm", 2],
  // px -> in
  [16, 0.16666666666666666, "px", "in", false],
  [16, 0.17, "px", "in", 2],
  // px -> pt
  [16, 12, "px", "pt", false],
  [16, 12, "px", "pt", 2],
  // px -> pc
  [16, 1, "px", "pc", false],
  [16, 1, "px", "pc", 2],
  // px -> q
  [16, 64, "px", "q", false],
  [16, 64, "px", "q", 2],

  // in unit conversion
  // in -> px
  [16, 1536, "in", "px", false],
  // in -> rem
  [16, 96, "in", "rem", false],
  // in -> em
  [16, 96, "in", "em", false],
  [16, 48, "in", "em", false, { baseFontSize: 32 }],
  // in -> %
  [16, 9600, "in", "%", false],
  // in -> vw
  [16, 120, "in", "vw", false, { viewPortWidth: 1280 }],
  // in -> vh
  [16, 206.729, "in", "vh", 3, { viewPortHeight: 743 }],
  // in -> vmin
  [16, 206.729, "in", "vmin", 3, { viewPortWidth: 1280, viewPortHeight: 743 }],
  // in -> vmax
  [16, 120, "in", "vmax", false, { viewPortWidth: 1280, viewPortHeight: 743 }],
  // in -> ch
  [16, 96, "in", "ch", false, { chFontSize: 16 }],
  // in -> cm
  [16, 40.64, "in", "cm", false],
  // in -> mm
  [16, 406.4, "in", "mm", false],
  // in -> pt
  [16, 1152, "in", "pt", false],
  // in -> pc
  [16, 96, "in", "pc", false],
  // in -> q
  [16, 1625.6, "in", "q", false],
];

unitConversion.forEach((testCase) => {
  const [value, expectedValue, targetUnit, sourceUnit, precision, props] =
    testCase;
  describe(`${value}${targetUnit} -> ${sourceUnit} = ${expectedValue}${sourceUnit}`, () => {
    it(`converts ${value}${targetUnit} to ${expectedValue}${sourceUnit} with precision of ${
      precision || 0
    } ${props ? `with a props of ${JSON.stringify(props)}` : ""}`, () => {
      expect(unitFlip(value, targetUnit, sourceUnit, precision, props)).toBe(
        expectedValue
      );
    });
  });
});
