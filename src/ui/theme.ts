const theme = {
  color: {
    red:{
      base:'#A31621'
    },
    gray: {
      base: '#CED3DC',
      100: "#FCF7F8"
    },
  },
}

type CustomTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    color: CustomTheme['color']
  }
}

export default theme
