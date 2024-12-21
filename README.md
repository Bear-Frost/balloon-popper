# Unitflip

A Javascript library for converting CSS units (e.g., px, rem, em, %) into other CSS units.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

### Installation
**using NPM**
```bash
npm install unitflip
```
**using CDN**
```js
// ES6 Syntax
import unitFlip from 'https://unpkg.com/unitflip@latest/dist/index.min.esm.js'

// Common JS
const unitFlip = require('https://unpkg.com/unitflip@latest/dist/index.min.cjs.js')
```
**using embedded CDN**
```html
<script src="https://unpkg.com/unitflip@latest/dist/index.min.umd.js"></script>
```

### Usage
```js
import unitFlip from 'unitflip';

// converts 16px to rem with default precision and props 
unitFlip(16, 'px', 'rem'); // 1rem

// converts 16vw into px with a precision of 2 and with a viewPortWidth set to 1280 
unitFlip(16, 'px', 'vw', 2, { viewPortWidth:1280 }) // 1.25
```

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.