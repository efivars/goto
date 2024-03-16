import { ButtonSize, ButtonVariant, GetButtonSizeCSS, GetButtonVariantCSS } from './button.types';

export const getButtonSizeCSS: GetButtonSizeCSS = ({ size }) => {
  const cssConfig: Record<ButtonSize, string> = {
    small: `
      font-size: 12px;
      padding: 4px 8px;
      gap: 8px;
    `,
    default: `
      font-size: 16px;
      padding: 8px 16px;
      gap: 16px;
    `,
  };

  return cssConfig[size];
};

export const getButtonVariantCSS: GetButtonVariantCSS = ({ variant }) => {
  const cssConfig: Record<ButtonVariant, string> = {
    primary: `
      background: blue;

      border-color: black;

      color: white;
      `,
    secondary: `
      background: pink;

      border-color: black;
      
      color: black;
    `,
    outline: `
      background: inherit;

      border-color: black;

      color: black;
  `,
  };

  return cssConfig[variant];
};
