import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'appId: com.soheib.lcouzina,
',
  appName: "L'couzina - Recettes Algériennes",
  webDir: 'dist',
  server: {
    url: 'https://48a179da-3b82-4afc-b6d2-b9abba68a774.lovableproject.com?forceHideBadge=true',
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
