import { useRoute } from 'wouter';
import { AppLinkHighlightMode, UseShouldHighlight } from './app-link.types';

export const useShouldHighlight: UseShouldHighlight = ({ to, highlightMode }) => {
  const [isCurrentRoute] = useRoute(to);

  const config: Record<AppLinkHighlightMode, boolean> = {
    auto: isCurrentRoute,
    always: true,
    never: false,
  };

  return config[highlightMode];
};
