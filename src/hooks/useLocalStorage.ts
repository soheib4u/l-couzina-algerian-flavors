import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}

// Specialized hooks for common use cases
export function useFavorites() {
  return useLocalStorage<number[]>('lcouzina-favorites', []);
}

export function useSettings() {
  return useLocalStorage('lcouzina-settings', {
    language: 'fr' as 'en' | 'fr' | 'ar',
    theme: 'light' as 'light' | 'dark',
    notifications: true,
  });
}

export function useShoppingList() {
  return useLocalStorage<{ id: string; name: string; checked: boolean }[]>('lcouzina-shopping-list', []);
}

export function useOfflineRecipes() {
  return useLocalStorage<number[]>('lcouzina-offline-recipes', []);
}