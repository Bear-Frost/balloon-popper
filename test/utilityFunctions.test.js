import {
  getChWidth,
  getViewPortDimension,
  getRootLineHeight,
} from "../src/utils";

beforeAll(() => {
  Object.defineProperty(global, "window", {
    value: {},
    enumerable: true,
    writable: true,
    configurable: false,
  });
});

afterAll(() => {
  delete global.window;
});

describe("returns a value of 0 if there is no window property or viewPort, viewHeight", () => {
  it("returns a value 0", () => {
    expect(getViewPortDimension("height")).toBe(0);
  });

  it("returns a value 0", () => {
    expect(getViewPortDimension("width")).toBe(0);
  });

  it("returns a value 0", () => {
    expect(getViewPortDimension()).toBe(0);
  });
});

describe("get the inner width and height of the viewport", () => {
  it("should get an inner height of the viewport", () => {
    global.window.innerHeight = 743;
    global.window.innerWidth = 1280;
    expect(getViewPortDimension("height")).toBe(743);
  });

  it("should get an inner width of the viewport", () => {
    global.window.innerHeight = 743;
    global.window.innerWidth = 1280;

    expect(getViewPortDimension("width")).toBe(1280);
  });

  it("should get an inner width of the viewport", () => {
    global.window.innerHeight = 743;
    global.window.innerWidth = 1280;

    expect(getViewPortDimension()).toBe(1280);
  });
});

describe("returns a value 0 if there is no window property or document properety, and createElement method,", () => {
  it("returns a value of 0", () => {
    expect(getChWidth()).toBe(0);
  });
});

describe('get the character width of "0" in a text', () => {
  it('should get the width of the text "0"', () => {
    global.window.document = {
      createElement: jest.fn().mockReturnValue({
        style: {},
        textContent: "",
        getBoundingClientRect: jest.fn().mockReturnValue({ width: 16 }),
      }),
      body: {
        appendChild: jest.fn(),
        removeChild: jest.fn(),
      },
    };

    expect(getChWidth()).toBe(16);
  });
});

describe("returns the value of 24 if there's no window property or document property, and getComputedStyle method", () => {
  it("returns a value of 24", () => {
    expect(getRootLineHeight()).toBe(24);
  });
});

describe("get the root line height value of the root element", () => {
  it("should get the root line height value", () => {
    global.window.document.documentElement = {};
    global.window.getComputedStyle = jest
      .fn()
      .mockReturnValue({ lineHeight: 36, rootFontSize: 16 });
    expect(getRootLineHeight()).toBe(36);
  });
});
