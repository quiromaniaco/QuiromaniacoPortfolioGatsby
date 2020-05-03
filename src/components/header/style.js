const styles = ({ app, typography }) => ({
  container: {
    // display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // margin: `${typography.pxToRem(8)} auto 0`,
    maxWidth: app.maxWidth,
    width: '100%',
    height: '100%',
  },
  navigation: {
    float: 'right',
    position: 'relative',
  },
  containerMobile: {
    // display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // margin: `${typography.pxToRem(8)} auto 0`,
    maxWidth: app.maxWidth,
    width: '100%',
    height: '100%',
  },
  navigationMobile: {
    float: 'right',
    position: 'relative',
  },
});

export default styles;
