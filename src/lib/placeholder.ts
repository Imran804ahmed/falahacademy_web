/** True for real content; false for empty values and "[Add …]" placeholders still awaiting details. */
export const isFilled = (value: string | null | undefined): value is string =>
  Boolean(value && value.trim() && !/^\[.*\]$/.test(value.trim()));
