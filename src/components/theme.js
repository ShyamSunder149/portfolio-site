import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  components: {
    Text: {
      color : 'black'
    },
    IconButton: {
      size : 'lg'
    }
  }
}

const theme = extendTheme({ config })

export default theme