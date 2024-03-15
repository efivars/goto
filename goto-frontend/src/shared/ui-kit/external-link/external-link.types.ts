export type HttpsURL = `https://${string}`;

export type IExternalLink = {
  href: HttpsURL;
  openInNewTab?: boolean;
  children: React.ReactNode;
};
