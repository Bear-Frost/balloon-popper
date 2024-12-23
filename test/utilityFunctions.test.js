import { getChWidth, getViewPortDimension } from "../src/utils";

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
