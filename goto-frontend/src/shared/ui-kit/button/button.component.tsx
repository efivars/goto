import styled from 'styled-components';
import { IButton, IButtonLayout } from './button.types';
import { getButtonSizeCSS, getButtonVariantCSS } from './button.utils';
import { FaSpinner } from 'react-icons/fa6';

export const Button: React.FC<IButton> = ({
  variant = 'primary',
  size = 'default',
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  return (
    <Layout variant={variant} size={size} disabled={disabled} onClick={onClick}>
      {children}
      {loading && <SpinningSpinner />}
    </Layout>
  );
};

const Layout = styled.button<IButtonLayout>`
  display: inline-flex;
  align-items: center;

  border: 1px solid;
  border-radius: 8px;

  cursor: pointer;
  user-select: none;

  ${getButtonSizeCSS}
  ${getButtonVariantCSS}

  ${p => p.disabled && `pointer-events: none; filter: opacity(.4);`}

  &:hover {
    filter: brightness(.9);
  }
`;

const SpinningSpinner = styled(FaSpinner)`
  @keyframes infinite-spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: infinite-spinning 1s infinite linear;
`;
