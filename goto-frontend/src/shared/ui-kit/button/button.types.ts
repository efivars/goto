export type ButtonVariant = 'primary' | 'outline' | 'secondary';
export type ButtonSize = 'small' | 'default';

export type IButton = React.PropsWithChildren<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;

export type IButtonLayout = Required<Pick<IButton, 'disabled' | 'size' | 'variant'>>;

export type GetButtonSizeCSS = (params: Pick<IButtonLayout, 'size'>) => string;
export type GetButtonVariantCSS = (params: Pick<IButtonLayout, 'variant'>) => string;
