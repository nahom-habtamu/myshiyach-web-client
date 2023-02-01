export { };

declare global {
  interface Window {
    recaptchaVerifier: any;
    FB: {
      AppEvents: {
        logEvent: (name: string, parameters?: Object) => any
      }
    };
  }
}
