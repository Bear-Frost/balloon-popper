import unitFlip from "../src/index";

const conversionItems = (sourceUnit, conversionProps) => {
  return conversionProps.map(({ targetUnit, expectedValue }) => {
    // value, expectedValue, sourceUnit, targetUnit, precision, props
    return [
      16,
      expectedValue,
      sourceUnit,
      targetUnit,
      2,
      { chFontSize: 16, viewPortWidth: 1280, viewPortHeight: 743 },
    ];
  });
};

const unitConversion = [
  // px unit conversion
  ...conversionItems("px", [
    {targetUnit:"px",expectedValue:16},
    { targetUnit: "rem", expectedValue: 1 },
    { targetUnit: "em", expectedValue: 1 },
    { targetUnit: "%", expectedValue: 100 },
    { targetUnit: "vw", expectedValue: 1.25 },
    { targetUnit: "vh", expectedValue: 2.15 },
    { targetUnit: "vmin", expectedValue: 2.15 },
    { targetUnit: "vmax", expectedValue: 1.25 },
    { targetUnit: "ch", expectedValue: 1 },
    { targetUnit: "cm", expectedValue: 0.42 },
    { targetUnit: "mm", expectedValue: 4.23 },
    { targetUnit: "in", expectedValue: 0.17 },
    { targetUnit: "pt", expectedValue: 12 },
    { targetUnit: "pc", expectedValue: 1 },
    { targetUnit: "q", expectedValue: 64 },
  ]),
  // in unit conversion
  ...conversionItems("in", [
    {targetUnit:"in",expectedValue:16},
    { targetUnit: "px", expectedValue: 1536 },
    { targetUnit: "rem", expectedValue: 96 },
    { targetUnit: "em", expectedValue: 96 },
    { targetUnit: "%", expectedValue: 9600 },
    { targetUnit: "vw", expectedValue: 120 },
    { targetUnit: "vh", expectedValue: 206.73 },
    { targetUnit: "vmin", expectedValue: 206.73 },
    { targetUnit: "vmax", expectedValue: 120 },
    { targetUnit: "ch", expectedValue: 96 },
    { targetUnit: "cm", expectedValue: 40.64 },
    { targetUnit: "mm", expectedValue: 406.4 },
    { targetUnit: "pt", expectedValue: 1152 },
    { targetUnit: "pc", expectedValue: 96 },
    { targetUnit: "q", expectedValue: 1625.6 },
  ]),
  // pc unit conversion
  ...conversionItems("pc", [
    {targetUnit:"pc",expectedValue:16},
    { targetUnit: "px", expectedValue: 256 },
    { targetUnit: "rem", expectedValue: 16 },
    { targetUnit: "em", expectedValue: 16 },
    { targetUnit: "%", expectedValue: 1600 },
    { targetUnit: "vw", expectedValue: 20 },
    { targetUnit: "vh", expectedValue: 34.45 },
    { targetUnit: "vmin", expectedValue: 34.45 },
    { targetUnit: "vmax", expectedValue: 20 },
    { targetUnit: "ch", expectedValue: 16 },
    { targetUnit: "cm", expectedValue: 6.77 },
    { targetUnit: "mm", expectedValue: 67.73 },
    { targetUnit: "in", expectedValue: 2.67 },
    { targetUnit: "pt", expectedValue: 192 },
    { targetUnit: "q", expectedValue: 270.93 },
  ]),
  // pt unit conversion
  ...conversionItems("pt", [
    { targetUnit: "pt", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 21.33 },
    { targetUnit: "rem", expectedValue: 1.33 },
    { targetUnit: "em", expectedValue: 1.33 },
    { targetUnit: "%", expectedValue: 133.33 },
    { targetUnit: "vw", expectedValue: 1.67 },
    { targetUnit: "vh", expectedValue: 2.87 },
    { targetUnit: "vmin", expectedValue: 2.87 },
    { targetUnit: "vmax", expectedValue: 1.67 },
    { targetUnit: "ch", expectedValue: 1.33 },
    { targetUnit: "cm", expectedValue: 0.56 },
    { targetUnit: "mm", expectedValue: 5.64 },
    { targetUnit: "in", expectedValue: 0.22 },
    { targetUnit: "pc", expectedValue: 1.33 },
    { targetUnit: "q", expectedValue: 22.58 },
  ]),
  // ch conversion unit
  ...conversionItems("ch", [
    { targetUnit: "ch", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 256 },
    { targetUnit: "rem", expectedValue: 16 },
    { targetUnit: "em", expectedValue: 16 },
    { targetUnit: "%", expectedValue: 1600 },
    { targetUnit: "vw", expectedValue: 20 },
    { targetUnit: "vh", expectedValue: 34.45 },
    { targetUnit: "vmin", expectedValue: 34.45 },
    { targetUnit: "vmax", expectedValue: 20 },
    { targetUnit: "cm", expectedValue: 6.77 },
    { targetUnit: "mm", expectedValue: 67.73 },
    { targetUnit: "in", expectedValue: 2.67 },
    { targetUnit: "pt", expectedValue: 192 },
    { targetUnit: "pc", expectedValue: 16 },
    { targetUnit: "q", expectedValue: 270.93 },
  ]),
  // cm unit conversion
  ...conversionItems("cm", [
    { targetUnit: "cm", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 604.72 },
    { targetUnit: "rem", expectedValue: 37.8 },
    { targetUnit: "em", expectedValue: 37.8 },
    { targetUnit: "%", expectedValue: 3779.53 },
    { targetUnit: "vw", expectedValue: 47.24 },
    { targetUnit: "vh", expectedValue: 81.39 },
    { targetUnit: "vmin", expectedValue: 81.39 },
    { targetUnit: "vmax", expectedValue: 47.24 },
    { targetUnit: "ch", expectedValue: 37.8 },
    { targetUnit: "mm", expectedValue: 160 },
    { targetUnit: "in", expectedValue: 6.3 },
    { targetUnit: "pt", expectedValue: 453.54 },
    { targetUnit: "pc", expectedValue: 37.8 },
    { targetUnit: "q", expectedValue: 640 },
  ]),
  // mm unit conversion
  ...conversionItems("mm", [
    { targetUnit: "mm", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 60.47 },
    { targetUnit: "rem", expectedValue: 3.78 },
    { targetUnit: "em", expectedValue: 3.78 },
    { targetUnit: "%", expectedValue: 377.95 },
    { targetUnit: "vw", expectedValue: 4.72 },
    { targetUnit: "vh", expectedValue: 8.14 },
    { targetUnit: "vmin", expectedValue: 8.14 },
    { targetUnit: "vmax", expectedValue: 4.72 },
    { targetUnit: "ch", expectedValue: 3.78 },
    { targetUnit: "cm", expectedValue: 1.6 },
    { targetUnit: "in", expectedValue: 0.63 },
    { targetUnit: "pt", expectedValue: 45.35 },
    { targetUnit: "pc", expectedValue: 3.78 },
    { targetUnit: "q", expectedValue: 64 },
  ]),
  // q unit conversion
  ...conversionItems("q", [
    { targetUnit: "q", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 4.23 },
    { targetUnit: "rem", expectedValue: 0.26 },
    { targetUnit: "em", expectedValue: 0.26 },
    { targetUnit: "%", expectedValue: 26.46 },
    { targetUnit: "vw", expectedValue: 0.33 },
    { targetUnit: "vh", expectedValue: 0.57 },
    { targetUnit: "vmin", expectedValue: 0.57 },
    { targetUnit: "vmax", expectedValue: 0.33 },
    { targetUnit: "ch", expectedValue: 0.26 },
    { targetUnit: "cm", expectedValue: 0.4 },
    { targetUnit: "mm", expectedValue: 4.0 },
    { targetUnit: "in", expectedValue: 0.16 },
    { targetUnit: "pt", expectedValue: 12.0 },
    { targetUnit: "pc", expectedValue: 0.35 },
  ]),
  // rem unit conversion
  ...conversionItems("rem", [
    { targetUnit: "rem", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 256 },
    { targetUnit: "em", expectedValue: 16 },
    { targetUnit: "%", expectedValue: 1600 },
    { targetUnit: "vw", expectedValue: 20 },
    { targetUnit: "vh", expectedValue: 34.45 },
    { targetUnit: "vmin", expectedValue: 34.45 },
    { targetUnit: "vmax", expectedValue: 20 },
    { targetUnit: "ch", expectedValue: 16 },
    { targetUnit: "cm", expectedValue: 6.77 },
    { targetUnit: "mm", expectedValue: 67.73 },
    { targetUnit: "in", expectedValue: 2.67 },
    { targetUnit: "pt", expectedValue: 192 },
    { targetUnit: "pc", expectedValue: 16 },
    { targetUnit: "q", expectedValue: 270.93 },
  ]),
  // em unit conversion
  ...conversionItems("em", [
    { targetUnit: "em", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 256 },
    { targetUnit: "rem", expectedValue: 16 },
    { targetUnit: "%", expectedValue: 1600 },
    { targetUnit: "vw", expectedValue: 20 },
    { targetUnit: "vh", expectedValue: 34.45 },
    { targetUnit: "vmin", expectedValue: 34.45 },
    { targetUnit: "vmax", expectedValue: 20 },
    { targetUnit: "ch", expectedValue: 16 },
    { targetUnit: "cm", expectedValue: 6.77 },
    { targetUnit: "mm", expectedValue: 67.73 },
    { targetUnit: "in", expectedValue: 2.67 },
    { targetUnit: "pt", expectedValue: 192 },
    { targetUnit: "pc", expectedValue: 16 },
    { targetUnit: "q", expectedValue: 270.93 },
  ]),
  // % unit conversion
  ...conversionItems("%", [
    { targetUnit: "%", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 2.56 },
    { targetUnit: "rem", expectedValue: 0.16 },
    { targetUnit: "em", expectedValue: 0.16 },
    { targetUnit: "vw", expectedValue: 204.8 },
    { targetUnit: "vh", expectedValue: 118.88 },
    { targetUnit: "vmin", expectedValue: 118.88 },
    { targetUnit: "vmax", expectedValue: 204.8 },
    { targetUnit: "ch", expectedValue: 2.56 },
    { targetUnit: "cm", expectedValue: 6.05 },
    { targetUnit: "mm", expectedValue: 9.68 },
    { targetUnit: "in", expectedValue: 0.15 },
    { targetUnit: "pt", expectedValue: 0.12 },
    { targetUnit: "pc", expectedValue: 0.01 },
    { targetUnit: "q", expectedValue: 4.03 },
  ]),
  // vw unit conversion
  ...conversionItems("vw", [
    { targetUnit: "vw", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 204.80 },
    { targetUnit: "rem", expectedValue: 12.8 },
    { targetUnit: "em", expectedValue: 12.8 },
    { targetUnit: "%", expectedValue: 1280 },
    { targetUnit: "vh", expectedValue:27.56  },
    { targetUnit: "vmin", expectedValue:27.56 },
    { targetUnit: "vmax", expectedValue: 16 },
    { targetUnit: "ch", expectedValue: 12.8 },
    { targetUnit: "cm", expectedValue: 5.42 },
    { targetUnit: "mm", expectedValue: 54.19 },
    { targetUnit: "in", expectedValue: 2.13 },
    { targetUnit: "pt", expectedValue: 153.6 },
    { targetUnit: "pc", expectedValue: 12.8 },
    { targetUnit: "q", expectedValue: 322.52 },
  ]),
  // vh unit conversion
  ...conversionItems('vh',[
    { targetUnit: "vh", expectedValue: 16 },
    {targetUnit:'px',expectedValue:118.88},
    {targetUnit:'rem',expectedValue:7.43},
    {targetUnit:'rem',expectedValue:7.43},
    {targetUnit:'%',expectedValue:743},
    {targetUnit:'vw',expectedValue:9.29},
    {targetUnit:'vmin',expectedValue:16},
    {targetUnit:'vmax',expectedValue:9.29},
    { targetUnit: "ch", expectedValue: 7.43 },
    { targetUnit: "cm", expectedValue: 3.15 },
    { targetUnit: "mm", expectedValue: 31.45 },
    { targetUnit: "in", expectedValue: 1.24 },
    { targetUnit: "pt", expectedValue: 89.16 },
    { targetUnit: "pc", expectedValue: 7.43 },
    { targetUnit: "q", expectedValue: 187.21 },
  ]),
  // vmin unit conversion
  ...conversionItems('vmin',[
    { targetUnit: "vmin", expectedValue: 16 },
    {targetUnit:'px',expectedValue:118.88},
    {targetUnit:'rem',expectedValue:7.43},
    {targetUnit:'rem',expectedValue:7.43},
    {targetUnit:'%',expectedValue:743},
    {targetUnit:'vw',expectedValue:9.29},
    {targetUnit:'vmax',expectedValue:9.29},
    { targetUnit: "ch", expectedValue: 7.43 },
    { targetUnit: "cm", expectedValue: 3.15 },
    { targetUnit: "mm", expectedValue: 31.45 },
    { targetUnit: "in", expectedValue: 1.24 },
    { targetUnit: "pt", expectedValue: 89.16 },
    { targetUnit: "pc", expectedValue: 7.43 },
    { targetUnit: "q", expectedValue: 187.21 },
  ]),
  // vmax unit conversion
  ...conversionItems('vmax',[
    { targetUnit: "vmax", expectedValue: 16 },
    { targetUnit: "px", expectedValue: 204.80 },
    { targetUnit: "rem", expectedValue: 12.8 },
    { targetUnit: "em", expectedValue: 12.8 },
    { targetUnit: "%", expectedValue: 1280 },
    { targetUnit: "vh", expectedValue:27.56  },
    { targetUnit: "vmin", expectedValue:27.56 },
    { targetUnit: "ch", expectedValue: 12.8 },
    { targetUnit: "cm", expectedValue: 5.42 },
    { targetUnit: "mm", expectedValue: 54.19 },
    { targetUnit: "in", expectedValue: 2.13 },
    { targetUnit: "pt", expectedValue: 153.6 },
    { targetUnit: "pc", expectedValue: 12.8 },
    { targetUnit: "q", expectedValue: 322.52 },
  ]),
  ...conversionItems('rlh',[
    { targetUnit: "px", expectedValue: 384 },
    { targetUnit: "rem", expectedValue: 24 },
    { targetUnit: "em", expectedValue: 24 },
    { targetUnit: "%", expectedValue: 2400 },
    { targetUnit: "vh", expectedValue: 51.68 },
    { targetUnit: "vw", expectedValue: 30 },
    { targetUnit: "vmin", expectedValue: 51.68 },
    { targetUnit: "vmax", expectedValue: 30 },
    { targetUnit: "ch", expectedValue: 24 },
    { targetUnit: "cm", expectedValue: 10.16 },
    { targetUnit: "mm", expectedValue: 101.6 },
    { targetUnit: "in", expectedValue: 4 },
    { targetUnit: "pt", expectedValue: 288 },
    { targetUnit: "pc", expectedValue: 24 },
    { targetUnit: "q", expectedValue: 406.4 },
  ]),
  // deg unit conversion
  ...conversionItems('deg',[
    { targetUnit: "deg", expectedValue: 16 },
    {targetUnit:'rad',expectedValue:0.28},
    {targetUnit:'grad',expectedValue:17.78},
    {targetUnit:'turn',expectedValue:0.04}
  ]),
  // grad unit conversion
  ...conversionItems('grad',[
    { targetUnit: "grad", expectedValue: 16 },
    {targetUnit:'rad',expectedValue:0.25},
    {targetUnit:'deg',expectedValue:14.4},
    {targetUnit:'turn',expectedValue:0.04}
  ]),
  // turn unit conversion
  ...conversionItems('turn',[
    { targetUnit: "turn", expectedValue: 16 },
    {targetUnit:'rad',expectedValue:100.53},
    {targetUnit:'deg',expectedValue:5760},
    {targetUnit:'grad',expectedValue:6400}
  ]),
  // rad unit conversion
  ...conversionItems('rad',[
    { targetUnit: "rad", expectedValue: 16 },
    {targetUnit:'deg',expectedValue:916.73},
    {targetUnit:'grad',expectedValue:1018.59},
    {targetUnit:'turn',expectedValue:2.55}
  ]),
  // dpi unit conversion
  ...conversionItems('dpi',[
    { targetUnit: "dpi", expectedValue: 16 },
    {targetUnit:'dpcm',expectedValue:6.30},
    {targetUnit:'dppx',expectedValue:0.17}
  ]),
  // dpcm unit conversion
  ...conversionItems('dpcm',[
    { targetUnit: "dpcm", expectedValue: 16 },
    {targetUnit:'dpi',expectedValue:40.64},
    {targetUnit:'dppx',expectedValue:0.42}
  ]),
  // dppx unit conversion
  ...conversionItems('dppx',[
    { targetUnit: "dppx", expectedValue: 16 },
    {targetUnit:'dpi',expectedValue:1536},
    {targetUnit:'dpcm',expectedValue:604.72}
  ]),
  // s unit conversion
  ...conversionItems('s',[
    { targetUnit: "s", expectedValue: 16 },
    {targetUnit:'ms',expectedValue:16000}
  ]),
  ...conversionItems('ms',[
    { targetUnit: "ms", expectedValue: 16 },
    {targetUnit:'s',expectedValue:0.02}
  ])
];

unitConversion.forEach((testCase) => {
  const [value, expectedValue, sourceUnit, targetUnit, precision, props] =
    testCase;
  describe(`${value}${sourceUnit} -> ${targetUnit} = ${expectedValue}${targetUnit}`, () => {
    it(`converts ${value}${sourceUnit} to ${expectedValue}${targetUnit} with precision of ${
      precision || 0
    } ${props ? `with a props of ${JSON.stringify(props)}` : ""}`, () => {
      expect(unitFlip(value, sourceUnit, targetUnit, precision, props)).toBe(
        expectedValue
      );
    });
  });
});
