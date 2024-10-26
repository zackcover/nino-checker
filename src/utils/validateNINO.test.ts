import { isValidNINO, isTRN } from './validateNINO';

describe('isValidNINO', () => {
  it('validates correctly formatted NINOs', () => {
    expect(isValidNINO('AB123456C').isValid).toBe(true);
    expect(isValidNINO('AA123456B').isValid).toBe(true);
  });

  it('rejects invalid prefixes', () => {
    expect(isValidNINO('BG123456A').isValid).toBe(false);
    expect(isValidNINO('ZZ123456B').isValid).toBe(false);
    expect(isValidNINO('KN123456C').isValid).toBe(false);
  });

  it('rejects invalid suffixes', () => {
    expect(isValidNINO('QQ123456E').isValid).toBe(false);
    expect(isValidNINO('AA123456F').isValid).toBe(false);
  });

  it('rejects incorrect format', () => {
    expect(isValidNINO('A123456A').isValid).toBe(false);      // Only 1 initial letter
    expect(isValidNINO('QQ12345A').isValid).toBe(false);      // Only 5 numbers
    expect(isValidNINO('QQ123456').isValid).toBe(false);      // Missing suffix letter
  });

  it('rejects administrative prefixes', () => {
    expect(isValidNINO('OO123456A').isValid).toBe(false);
    expect(isValidNINO('FY123456B').isValid).toBe(false);
  });

  it('provides specific error messages', () => {
    const result = isValidNINO('BG123456A');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Invalid prefix");
  });
});

describe('isTRN', () => {
  it('detects valid TRNs', () => {
    expect(isTRN('11 a1 11 11')).toBe(true);
  });

  it('rejects invalid TRNs', () => {
    expect(isTRN('AA123456A')).toBe(false);
  });
});
