export const setLocalStorageItem = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageItem = (key: string, fallback?: any): any => {
  const value = window.localStorage.getItem(key)

  return value ? JSON.parse(value) : fallback ?? null
}
