interface ValidationResult {
  isValid: boolean;
  error: string | null;
}

/**
 * Validates a given UK National Insurance Number (NINO).
 * @param nino - The NINO string to validate.
 * @returns ValidationResult object with validity and error details.
 */
export function isValidNINO(nino: string): ValidationResult {
  const ninoPattern = /^[A-CEGHJ-PR-TW-Z]{2}\d{6}[A-D]$/;

  const prefix = nino.slice(0, 2).toUpperCase();
  const suffix = nino.slice(-1);
  const invalidPrefixes = ["BG", "GB", "KN", "NK", "NT", "TN", "ZZ"];
  const adminPrefixes = ["OO", "FY", "NC", "PP", "PZ"];
  const invalidCharacters = ["D", "F", "I", "Q", "U", "V"];

  // Step 1: Check format using regex
  if (!ninoPattern.test(nino)) {
    return { isValid: false, error: "Incorrect format" };
  }

  // Step 2: Check if prefix contains invalid characters
  if (
    invalidCharacters.includes(prefix[0]) ||
    invalidCharacters.includes(prefix[1])
  ) {
    return { isValid: false, error: "Invalid prefix" };
  }

  // Step 3: Check if prefix is invalid
  if (invalidPrefixes.includes(prefix)) {
    return { isValid: false, error: "Invalid prefix" };
  }

  // Step 4: Check if prefix is administrative
  if (adminPrefixes.includes(prefix)) {
    return { isValid: false, error: "Administrative prefix" };
  }

  // Step 5: Check if suffix is invalid
  if (!["A", "B", "C", "D"].includes(suffix)) {
    return { isValid: false, error: "Invalid suffix" };
  }

  // If all checks pass, NINO is valid
  return { isValid: true, error: null };
}

/**
 * Checks if a reference number is a Temporary Reference Number (TRN).
 * @param ref - The reference number to check.
 * @returns True if it matches TRN format, otherwise false.
 */
export function isTRN(ref: string): boolean {
  const trnPattern = /^\d{2} [a-zA-Z]\d \d{2} \d{2}$/;
  return trnPattern.test(ref);
}
