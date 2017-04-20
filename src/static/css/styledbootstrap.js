import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  '@-ms-viewport': {
    'width': [{ 'unit': 'string', 'value': 'device-width' }]
  },
  'html': {
    'WebkitBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'MsOverflowStyle': 'scrollbar'
  },
  '*': {
    'WebkitBoxSizing': 'inherit',
    'boxSizing': 'inherit'
  },
  '*::before': {
    'WebkitBoxSizing': 'inherit',
    'boxSizing': 'inherit'
  },
  '*::after': {
    'WebkitBoxSizing': 'inherit',
    'boxSizing': 'inherit'
  }
})
