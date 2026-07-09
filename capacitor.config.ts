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
    StatusBar: {
      overlaysWebView: false,
      backgroundColor: "#ffffff",
      style: "LIGHT"
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
    SplashScreen: {
      launchShowDuration: 0, // 🚀 FIXED: Changed from 2000 to 0 to completely eliminate the native splash double-flash
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    },
    PushNotifications: { // 🚀 ADDED: Explicit configuration to guarantee notification behaviors
      presentationOptions: ["badge", "sound", "alert"]
    }
  }
};

export default config;
