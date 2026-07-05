import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mohit.ecampus',
  appName: 'ECampus',
  webDir: 'www', 
  server: {
    url: 'https://mohitasdeveloper.github.io/ECampus/',
    cleartext: false,
    allowNavigation: ['mohitasdeveloper.github.io']
  },
  plugins: {
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    },
    StatusBar: {
      style: 'LIGHT', // Makes the status bar text/icons dark
      backgroundColor: '#ffffff', // White background
      overlaysWebView: false // Tells it not to float over your website
    }
  }
};

export default config;
