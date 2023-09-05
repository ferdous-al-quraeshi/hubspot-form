import Script from "next/script";
const GoogleAnalytics = ({ ga_id }: {ga_id: string}) => (
  <Script
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
    onLoad={() => {
      const win: any = window;
      win.dataLayer = win.dataLayer || [];
      function gtag(..._args: (string | Date)[]) {
        win.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", ga_id);
    }}
  />
);
export default GoogleAnalytics;