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
  [16, 2.1534320323014806, "px", "vmin", false, { viewPortWidth: 1280, viewPortHeight: 743 }],
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

  // pc unit conversion
  // pc -> px 
  [16, 256, "pc", "px", false],
  // pc -> rem
  [16, 16, "pc", "rem", false],
  // pc -> em
  [16, 16, "pc", "em", false],
  // pc -> %
  [16, 1600, "pc", "%", false],
  // pc -> vw
  [16, 20, "pc", "vw", false, { viewPortWidth: 1280 }],
  // pc -> vh
  [16, 34.45, "pc", "vh", 2, { viewPortHeight: 743 }],
  // pc -> vmin
  [16, 34.45, "pc", "vmin", 2, { viewPortWidth: 1280, viewPortHeight: 743 }],
  // pc -> vmax
  [16, 20, "pc", "vmax", 2, { viewPortWidth: 1280, viewPortHeight: 743 }],
  // pc -> ch 
  [16, 16, "pc", "ch", false, { chFontSize: 16 }],
  // pc -> cm 
  [16, 6.77, "pc", "cm", 2],
  // pc -> mm
  [16, 67.73, "pc", "mm", 2],
  // pc -> in 
  [16, 2.67, "pc", "in", 2],
  // pc -> pt
  [16, 192, "pc", "pt", false],
  // pc -> q
  [16, 270.93, "pc", "q", 2],
  // pt unit conversion
  // pt -> px
  [16,21.33,'pt','px',2],
  // pt -> rem
  [16,1.33,'pt','rem',2],
  // pt -> em
  [16,1.33,'pt','em',2],
  // pt -> %
  [16,133.33,'pt','%',2],
  // pt -> vw
  [16,1.67,'pt','vw',2,{viewPortWidth:1280}],
  // pt -> vh
  [16,2.87,'pt','vh',2,{viewPortHeight:743}],
  // pt -> vmin
  [16,2.87,'pt','vmin',2,{viewPortWidth:1280,viewPortHeight:743}],
  // pt -> vmax
  [16,1.67,'pt','vmax',2,{viewPortWidth:1280,viewPortHeight:743}],
  // pt -> ch
  [16,1.33,'pt','ch',2,{chFontSize:16}],
  // pt -> cm
  [16,0.56,'pt','cm',2],
  // pt -> mm
  [16,5.64,'pt','mm',2],
  // pt -> in
  [16,0.22,'pt','in',2],
  // pt -> pc
  [16,1.33,'pt','pc',2],
  // pt -> q 
   [16,22.58,'pt','q',2]
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
