import { useState } from 'react';
import { 
  User, 
  Globe, 
  Palette, 
  Star, 
  MessageCircle, 
  Info, 
  Trash2, 
  Download,
  Sun,
  Moon,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useTranslation } from '@/hooks/useTranslation';
import { useSettings } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';
import { Language } from '@/locales';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useSettings();
  const { toast } = useToast();

  const handleLanguageChange = (language: Language) => {
    setSettings({ ...settings, language });
    toast({
      title: "Language updated",
      description: `Language changed to ${language.toUpperCase()}`,
    });
  };

  const handleThemeChange = (theme: 'light' | 'dark') => {
    setSettings({ ...settings, theme });
    
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    toast({
      title: "Theme updated",
      description: `Switched to ${theme} mode`,
    });
  };

  const handleNotificationsToggle = (notifications: boolean) => {
    setSettings({ ...settings, notifications });
    toast({
      title: notifications ? "Notifications enabled" : "Notifications disabled",
      description: notifications 
        ? "You'll receive notifications for new recipes and tips"
        : "Notifications have been turned off",
    });
  };

  const clearCache = () => {
    // Clear various caches
    localStorage.removeItem('lcouzina-offline-recipes');
    toast({
      title: "Cache cleared",
      description: "All cached data has been removed",
    });
  };

  const exportRecipes = () => {
    // In a real app, this would generate and download a JSON file
    toast({
      title: "Export started",
      description: "Your recipes are being prepared for export",
    });
  };

  const openAppStore = () => {
    // In a real app, this would open the appropriate app store
    toast({
      title: "Thanks for your interest!",
      description: "Rate us in your app store",
    });
  };

  const SettingItem = ({ 
    icon: Icon, 
    title, 
    description, 
    children 
  }: { 
    icon: any, 
    title: string, 
    description?: string, 
    children: React.ReactNode 
  }) => (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-foreground">{t('settings')}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {t('profile')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Food Lover</h3>
                <p className="text-sm text-muted-foreground">L'couzina enthusiast</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <SettingItem
              icon={Globe}
              title={t('language')}
              description="Choose your preferred language"
            >
              <Select
                value={settings.language}
                onValueChange={handleLanguageChange}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectContent>
              </Select>
            </SettingItem>

            <SettingItem
              icon={settings.theme === 'dark' ? Moon : Sun}
              title={t('theme')}
              description="Choose your preferred theme"
            >
              <div className="flex items-center gap-2">
                <Button
                  variant={settings.theme === 'light' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleThemeChange('light')}
                >
                  {t('light')}
                </Button>
                <Button
                  variant={settings.theme === 'dark' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleThemeChange('dark')}
                >
                  {t('dark')}
                </Button>
              </div>
            </SettingItem>

            <SettingItem
              icon={Smartphone}
              title="Notifications"
              description="Receive updates about new recipes"
            >
              <Switch
                checked={settings.notifications}
                onCheckedChange={handleNotificationsToggle}
              />
            </SettingItem>
          </CardContent>
        </Card>

        {/* App */}
        <Card>
          <CardHeader>
            <CardTitle>App</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <SettingItem
              icon={Star}
              title={t('rateUs')}
              description="Rate L'couzina in your app store"
            >
              <Button variant="outline" size="sm" onClick={openAppStore}>
                Rate
              </Button>
            </SettingItem>

            <SettingItem
              icon={Download}
              title={t('exportRecipes')}
              description="Export your favorite recipes as JSON"
            >
              <Button variant="outline" size="sm" onClick={exportRecipes}>
                Export
              </Button>
            </SettingItem>

            <SettingItem
              icon={Trash2}
              title={t('clearCache')}
              description="Clear all cached data and offline recipes"
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Clear
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Clear Cache</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will remove all cached data and offline recipes. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
                    <AlertDialogAction onClick={clearCache}>
                      {t('confirm')}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </SettingItem>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              {t('about')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <h3 className="text-xl font-bold text-primary mb-2">L'couzina</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover the secrets of traditional Algerian cuisine
              </p>
              <p className="text-xs text-muted-foreground">
                Version 1.0.0
              </p>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                L'couzina brings you authentic Algerian recipes passed down through generations. 
                From street food to elaborate feasts, discover the rich culinary heritage of Algeria.
              </p>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                {t('contact')}
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Privacy Policy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};