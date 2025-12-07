import { useState } from '#imports'

function useTheme() {
  const theme = useState('theme', () => 'dark')

  function switchTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return {
    theme,
    switchTheme,
  }
}

export { useTheme }
