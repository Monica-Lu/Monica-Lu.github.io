import React from 'react';
import { Button } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from './ThemeProvider';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="3"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {theme === 'light' ? (
        <SunIcon width="18" height="18" />
      ) : (
        <MoonIcon width="18" height="18" />
      )}
    </Button>
  );
};