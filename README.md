# Unitflip

A Javascript library for converting CSS units (e.g., px, rem, em, %) into other CSS units.

<details>
    <summary><h2>Table of Contents</h2></summary>
    <ul>
        <li>
          <a href="#installation">Installation</a>
        </li>
        <li>
          <a href="#usage">Usage</a>
        </li>
        <li>
          <a href="#license">License</a>
        </li>
        <li>
            <a href="#development">Development</a>
        </li>
    </ul>
</details>

## Installation

**using NPM**

```bash
npm install unitflip
```

**using CDN**

```js
// ES6 Syntax
import unitFlip from "https://unpkg.com/unitflip@latest/dist/index.esm.mjs";

// Common JS
const unitFlip = require("https://unpkg.com/unitflip@latest/dist/index.cjs");
```

**using embedded CDN**

```html
<script src="https://unpkg.com/unitflip@latest/dist/index.umd.js"></script>
```

## Usage

```js
import unitFlip from "unitflip";

// converts 16px to rem with default precision and props
unitFlip(16, "px", "rem"); // 1rem

// converts 16vw into px with a precision of 2 and with a viewPortWidth set to 1280
unitFlip(16, "px", "vw", 2, { viewPortWidth: 1280 }); // 1.25
```

## Development

### Running the Test

```bash
npm run test
```

### Break Down into End to End Test

these unit test are for checking if the conversion function is returning the right conversion value.

- focus on individual functions of unitFlip.
- test cases cover common scenarios.
- Framework: [Jest](https://jestjs.io/)

```js
import unitFlip from "unitflip";

it("should return 1", () => {
  // value, sourceUnit, targetUnit
  expect(unitFlip(16, "px", "rem")).toBe(1);
});
```

### Running Locally

1. **Clone the repository:**

```bash
git clone https://github.com/zshaian/unitflip.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Dev Mode:**

```bash
npm run dev
```

4. **Build:**

```bash
npm run build
```

This generates a `dist/` folder with the production ready files.

### Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the process of submitting pull request or creating an issue.

### Code of Conduct
Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct.

### Built With

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![RollupJS](https://img.shields.io/badge/RollupJS-ef3335?style=for-the-badge&logo=rollup.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

### Versioning

[SemVer](https://semver.org/) for versioning. For the versions available, see the [Repo Tags](https://github.com/zshaian/unitflip/tags)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
