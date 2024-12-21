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
  [16,22.58,'pt','q',2],
  // ch conversion unit
  // ch -> px
  [16,256,'ch','px',2,{chFontSize:16}],
  // ch -> rem
  [16,16,'ch','rem',2,{chFontSize:16}],
  // ch -> em
  [16,16,'ch','em',2,{chFontSize:16}],
  // ch -> %
  [16,1600,'ch','%',2,{chFontSize:16}],
  // ch -> vw
  [16,20,'ch','vw',2,{viewPortWidth:1280,chFontSize:16}],
  // ch -> vh
  [16,34.45,'ch','vh',2,{viewPortHeight:743,chFontSize:16}],
  // ch -> vmin
  [16,34.45,'ch','vmin',2,{viewPortWidth:1280,viewPortHeight:743,chFontSize:16}],
  // ch -> vmax
  [16,20,'ch','vmax',2,{viewPortWidth:1280,viewPortHeight:743,chFontSize:16}],
  // ch -> in 
  [16,2.67,'ch','in',2,{chFontSize:16}],
  // ch -> cm
  [16,6.77,'ch','cm',2,{chFontSize:16}],
  // ch -> mm
  [16,67.73,'ch','mm',2,{chFontSize:16}],
  // ch -> pt
  [16,192,'ch','pt',2,{chFontSize:16}],
  // ch -> pc
  [16,16,'ch','pc',2,{chFontSize:16}],
  // ch -> q
  [16,270.93,'ch','q',2,{chFontSize:16}],
  // cm unit conversion
  // cm -> px
  [16,604.72,'cm','px',2],
  // cm -> rem
  [16,37.80,'cm','rem',2],
  // cm -> em
  [16,37.80,'cm','em',2],
  // cm -> %
  [16,3779.53,'cm','%',2],
  // cm -> vw
  [16,47.24,'cm','vw',2,{viewPortWidth:1280}],
  // cm -> vh
  [16,81.39,'cm','vh',2,{viewPortHeight:743}],
  // cm -> vmin
  [16,81.39,'cm','vmin',2,{viewPortWidth:1280,viewPortHeight:743}],
  // cm -> vmax
  [16,47.24,'cm','vmax',2,{viewPortWidth:1280,viewPortHeight:743}],
  // cm -> ch
  [16,37.80,'cm','ch',2,{chFontSize:16}],
  // cm -> mm
  [16,160,'cm','mm',2],
  // cm -> in
  [16,6.30,'cm','in',2],
  // cm -> pt
  [16,453.54,'cm','pt',2],
  // cm -> pc
  [16,37.80,'cm','pc',2],
  // cm -> q
  [16,640,'cm','q',2],
  // mm unit conversion
  // mm -> px
  [16,60.47,'mm','px',2],
  // mm -> rem
  [16,3.78,'mm','rem',2],
  // mm -> em
  [16,3.78,'mm','em',2],
  // mm -> %
  [16,377.95,'mm','%',2],
  // mm -> vw
  [16,4.72,'mm','vw',2,{viewPortWidth:1280}],
  // mm -> vh
  [16,8.14,'mm','vh',2,{viewPortHeight:743}],
  // mm -> vmin
  [16,8.14,'mm','vmin',2,{viewPortWidth:1280,viewPortHeight:743}],
  // mm -> vmax
  [16,4.72,'mm','vmax',2,{viewPortWidth:1280,viewPortHeight:743}],
  // mm -> ch
  [16,3.78,'mm','ch',2,{chFontSize:16}],
  // mm -> cm
  [16,1.60,'mm','cm',2],
  // mm -> in
  [16,0.63,'mm','in',2],
  // mm -> pt
  [16,45.35,'mm','pt',2],
  // mm -> pc
  [16,3.78,'mm','pc',2],
  // mm -> q
  [16,64.00,'mm','q',2],
  // q unit conversion
  // q -> px
  [16,4.23,'q','px',2],
  // q -> rem
  [16,0.26,'q','rem',2],
  // q -> em
  [16,0.26,'q','em',2],
  // q -> %
  [16,26.46,'q','%',2],
  // q -> vw
  [16,0.33,'q','vw',2,{viewPortWidth:1280}],
  // q -> vh
  [16,0.57,'q','vh',2,{viewPortHeight:743}],
  // q -> vmin
  [16,0.57,'q','vmin',2,{viewPortWidth:1280,viewPortHeight:743}],
  // q -> vmax
  [16,0.33,'q','vmax',2,{viewPortWidth:1280,viewPortHeight:743}],
  // q -> ch
  [16,0.26,'q','ch',2,{chFontSize:16}],
  // q -> cm
  [16,0.40,'q','cm',2],
  // q -> mm
  [16,4.00,'q','mm',2],
  // q -> in
  [16,0.16,'q','in',2],
  // q -> pt
  [16,12.00,'q','pt',2],
  // q -> pc
  [16,0.35,'q','pc',2],
  // rem unit conversion
  // rem -> px
  [16,256,'rem','px',2],
  // rem -> em
  [16,16,'rem','em',2],
  // rem -> %
  [16,1600,'rem','%',2],
  // rem -> vw
  [16,20,'rem','vw',2,{viewPortWidth:1280}],
  // rem -> vh
  [16,34.45,'rem','vh',2,{viewPortHeight:743}],
  // rem -> vmin
  [16,34.45,'rem','vmin',2,{viewPortWidth:1280,viewPortHeight:743}],
  // rem -> vmax
  [16,20,'rem','vmax',2,{viewPortWidth:1280,viewPortHeight:743}], 
  // rem -> ch
  [16,16,'rem','ch',2,{chFontSize:16}],
  // rem -> cm
  [16,6.77,'rem','cm',2],
  // rem -> mm
  [16,67.73,'rem','mm',2],
  // rem -> in
  [16,2.67,'rem','in',2],
  // rem -> pt
  [16,192,'rem','pt',2],
  // rem -> pc
  [16,16,'rem','pc',2],
  // rem -> q
  [16,270.93,'rem','q',2],
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
