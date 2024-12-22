declare module "unitflip" {
  export type CSSUnits =
    | "px"
    | "rem"
    | "em"
    | "%"
    | "vw"
    | "vh"
    | "vmin"
    | "vmax"
    | "ch"
    | "cm"
    | "in"
    | "mm"
    | "pt"
    | "pc"
    | "q";

  export type Props = {
    rootFontSize?: number;
    baseFontSize?: number;
    chFontSize?: number;
    viewPortWidth?: number;
    viewPortHeight?: number;
    minViewPortSize?: number;
    maxViewPortSize?: number;
  };

  export default (
    value: number,
    sourceUnit: CSSUnits,
    targetUnit: CSSUnits,
    precision: number | boolean,
    props: Props
  ) => number;
}
