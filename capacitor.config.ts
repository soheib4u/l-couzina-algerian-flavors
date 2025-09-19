import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.soheib.lcouzina',
  
  appName: "L'couzina - Recettes Algériennes",
  webDir: 'dist',
  server: {
  // url removed to launch app directly
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#D97706',
      androidSplashResourceName: 'splash'
    }
  }
};

export default config;
