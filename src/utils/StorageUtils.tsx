import * as React from 'react';
/**
 * We have some SSR shenanigans.
 */
function getFromLocalStorage(key: string): string | null {
  if (typeof window === 'undefined') return null;

  return window.localStorage.getItem(key);
}

export function useSavedValue<T>(
  name: string,
  defaultValue: T,
): [T, (newValue: T) => void] {
  const [value, setValue] = React.useState(
    () => getFromLocalStorage(name) ?? defaultValue,
  );

  const handleSetValue = React.useCallback(
    (newValue: T) => {
      if (value === newValue) {
        return;
      }

      setValue(newValue);
      window.localStorage.setItem(name, newValue);
    },
    [value, name],
  );

  return [value, handleSetValue];
}
