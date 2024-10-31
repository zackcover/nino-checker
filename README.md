# NINO-Checker

![npm](https://img.shields.io/npm/v/nino-checker) ![license](https://img.shields.io/badge/license-MIT-blue.svg) ![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

## Overview

Nino-checker is a lightweight and efficient JavaScript library designed to validate UK National Insurance Numbers (NINOs) accurately. Following HMRC guidelines, nino-checker ensures that inputted NINOs are correctly formatted, validates prefixes, detects administrative numbers, and identifies Temporary Reference Numbers (TRNs) to offer comprehensive NINO validation.

## Features

- **NINO Validation**: Verifies that NINOs follow the correct format.
- **Prefix Control**: Rejects invalid and administrative prefixes.
- **TRN Detection**: Distinguishes between valid NINOs and temporary reference numbers.
- **Detailed Error Messages**: Provides specific validation error messages for accurate debugging.
- **Compatibility**: Works with JavaScript and React applications.

## Installation
Install the library via npm:
```bash
npm install nino-checker
```
Or using yarn:
```bash
yarn add nino-checker
```

## Usage
### Example: Validating a NINO
```javascript
import { isValidNINO } from 'nino-checker';

const result = isValidNINO('QQ123456A');
if (result.isValid) {
  console.log("The NINO is valid.");
} else {
  console.log(`Invalid NINO: ${result.error}`);
}
```
### Example: Detecting a Temporary Reference Number (TRN)
```javascript
import { isTRN } from 'nino-checker';

const isTempReference = isTRN('11 a1 11 11');
console.log(`Is TRN: ${isTempReference}`);
```

## API
### `isValidNINO(nino: string): { isValid: boolean, error: string | null }`
Validates a given NINO based on format, prefix, and suffix rules.
- Parameters:
    - `nino` (string): The NINO to validate.
- Returns:
    - An object containing:
        - `isValid`: A boolean indicating if the NINO is valid.
        - `error`: A string containing the validation error, or null if valid.
- Usage:
    ```javascript
    const result = isValidNINO('QQ123456A');
    console.log(result.isValid); // true or false
    console.log(result.error);   // Error details or null if valid
    ```

### `isTRN(ref: string): boolean`
Checks if a given reference number is a Temporary Reference Number (TRN).
- Parameters:
    - `ref` (string): The reference to check.
- Returns:
    - `true` if it matches the TRN format, otherwise `false`.
- Usage:
    ```javascript
    const isTemp = isTRN('11 a1 11 11');
    console.log(isTemp); // true if TRN, false otherwise
    ```
## Validation Rules
1. Format: NINO should follow the pattern `XX123456Y`, where:
    - `XX`: Two uppercase letters (excluding `D`, `F`, `I`, `Q`, `U`, `V`).
    - `123456`: Six digits.
    - `Y`: One of the letters `A`, `B`, `C`, or `D`.
2. Invalid Prefixes: NINOs with prefixes `BG`, `GB`, `KN`, `NK`, `NT`, `TN`, and `ZZ` are rejected.
3. Administrative Prefixes: `OO`, `FY`, `NC`, `PP`, and `PZ` are rejected as administrative prefixes.
4. Temporary Reference Numbers (TRN): Follows the format `11 a1 11 11` and is not treated as a valid NINO.

## Testing
nino-checker includes a complete test suite using [Jest](https://jestjs.io/). Tests cover valid and invalid NINO formats, administrative prefixes, TRNs, and specific error messages.
To run tests, use:
```bash
npm test
```

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature.
3. Commit changes with clear messages.
4. Push to your branch and open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For questions or suggestions, please open an issue in this repository.
