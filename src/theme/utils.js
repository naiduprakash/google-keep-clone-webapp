export const convertHexToRGBA = (hexCode, opacity = 1) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

let opacityScales = ['1a', '33', '4d', '66', '80', '99', 'b3', 'cc', 'e6'];

export function extendsColorOpacity(colors) {
  let updatedColorVariants = {};
  for (let colorKey in colors) {
    let colorValue = colors[colorKey];
    let isTypeString = typeof colorValue === 'string' || colorValue instanceof String;
    let isTypeObject =
      typeof colorValue === 'object' && !Array.isArray(colorValue) && colorValue !== null;

    if (isTypeString) {
      let isHexCode = colorValue[0] === '#';
      let isWithoutAlpha = colorValue.length === 4 || colorValue.length === 7;
      if (isHexCode && isWithoutAlpha) {
        updatedColorVariants[colorKey] = colorValue;
        opacityScales.forEach((variant, variantIndex) => {
          updatedColorVariants[`${colorKey}-${variantIndex + 1}`] = `${colorValue}${variant}`;
        });
      } else {
        updatedColorVariants[colorKey] = colorValue;
      }
    } else if (isTypeObject) {
      updatedColorVariants[colorKey] = extendsColorOpacity(colorValue);
    } else {
      updatedColorVariants[colorKey] = colorValue;
    }
  }
  return updatedColorVariants;
}
