import { translations, type Language, type Translations } from '@/locales';
import { useSettings } from './useLocalStorage';

export function useTranslation() {
  const [settings] = useSettings();
  const currentLanguage = settings.language as Language;
  
  const t = (key: keyof Translations): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const changeLanguage = (language: Language) => {
    // This would update the settings through useSettings
    // The actual implementation depends on how settings are managed
  };

  return {
    t,
    language: currentLanguage,
    changeLanguage,
  };
}