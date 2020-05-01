const typography = typography => ({
  fontFamily: 'Source Code Pro',
  fontSize: 16,
  h1: {
    fontSize: typography.pxToRem(50),
    lineHeight: 1.1,
    fontWeight: 800,
    paddingBottom: 15,
    // fontFamily: 'Source Code Pro'
  },
  h2: {
    fontSize: typography.pxToRem(56),
    lineHeight: 1.1,
    fontWeight: 500,
  },
  h3: {
    fontSize: typography.pxToRem(20),
    lineHeight: 1.5,
    fontWeight: 100,
    fontFamily: 'Source Code Pro'
  },
  h4: {
    fontSize: typography.pxToRem(28),
    lineHeight: 1.1,
    fontWeight: 300,
    fontFamily: 'Source Code Pro'
  },
  body1: {
    fontSize: typography.pxToRem(16),
    lineHeight: 1.1,
    fontWeight: 300,
  },
  body2: {
    fontSize: typography.pxToRem(16),
    lineHeight: 1.1,
    fontWeight: 300,
  },
});

export default typography;
