'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme';
interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeDevice, setThemeDevice] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = themeDevice === 'light' ? 'dark' : 'light';
    setThemeDevice(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme : themeDevice, toggleTheme }}>
      <ThemeProvider theme={themes[themeDevice]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemes = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};
