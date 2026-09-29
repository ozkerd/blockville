import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ozkerd.blockville',
  appName: 'Blockville Rush & Ride',
  webDir: 'dist',
  plugins: {
    StatusBar: {
      overlaysWebView: true,
      hidden: true
    }
  },
  ios: {
    contentInset: 'never',
    preferredContentMode: 'mobile',
    allowsLinkPreview: false,
    scrollEnabled: false,
    limitsNavigationsToAppBoundDomains: false
  }
};

export default config;
