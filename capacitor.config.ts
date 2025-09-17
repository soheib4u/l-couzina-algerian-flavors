import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.48a179da3b824afcb6d2b9abba68a774',
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