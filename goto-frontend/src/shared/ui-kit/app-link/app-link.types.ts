export type AppLinkHighlightMode = 'auto' | 'always' | 'never';

export type IAppLink = {
  to: string;
  highlightMode?: AppLinkHighlightMode;
  children: React.ReactNode;
};

export type UseShouldHighlight = (
  params: Required<Pick<IAppLink, 'to' | 'highlightMode'>>,
) => boolean;
