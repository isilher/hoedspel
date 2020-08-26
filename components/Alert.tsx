import { Alert as RNAlert, Platform } from 'react-native'

const alertPolyfill = (title, description, options, extra) => {
  const result = window.confirm([title, description].filter(Boolean).join('\n'))

  if (result) {
    const confirmOption = options.find(({ style }) => style !== 'cancel')
    confirmOption?.onPress && confirmOption.onPress()
  } else {
    const cancelOption = options.find(({ style }) => style === 'cancel')
    cancelOption?.onPress && cancelOption.onPress()
  }
}

export const Alert = Platform.OS === 'web' ? { alert: alertPolyfill } : RNAlert
