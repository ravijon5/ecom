const palette = {
  lightPurple: '#e8e1fc',
  purple: '#8E6Cf0',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#F0F2F3',
  grey: '#f4f4f4',
}

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    greyBackground: palette.grey,
    primary: palette.purple,
    primaryLight: palette.lightPurple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    headerBold: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    header: {
      fontSize: 24,
    },
    subHeader: {
      fontSize: 15,
    },
    subHeaderBold: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
    },
  }
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  }
}