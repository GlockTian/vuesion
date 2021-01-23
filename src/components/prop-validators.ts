export const brandVariations = ['primary', 'neutral', 'danger', 'warning', 'success', 'info'];
export const textVariations = [
  'primary',
  'neutral',
  'danger',
  'warning',
  'success',
  'info',
  'high-emphasis',
  'medium-emphasis',
  'low-emphasis',
  'high-emphasis-inverse',
  'medium-emphasis-inverse',
  'low-emphasis-inverse',
];
export const brandSpacings = ['none', 'sm', 'md', 'lg'];

export const colorVariationValidator = (value: string) => {
  return brandVariations.includes(value.toLowerCase());
};

export const textColorVariationValidator = (value: string) => {
  return textVariations.includes(value.toLowerCase());
};

export const spacingValidator = (value: string) => {
  return brandSpacings.includes(value.toLowerCase());
};
