declare module "nino-checker" {
  export function isValidNINO(nino: string): boolean;
  export function isTRN(trn: string): boolean;
  export type ValidationResult = {
    valid: boolean;
    reason?: string;
  };
}
