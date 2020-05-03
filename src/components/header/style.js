const styles = ({ app, typography }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: `${typography.pxToRem(8)} auto 0`,
    maxWidth: app.maxWidth,
    width: '100%',
  },
  logo: {
    border: 'none',
    float: 'left',
    transition: 'all .3s',
    textDecoration: 'none',
  },
  navigation: {
    float: 'right',
    position: 'relative',
  },
  containerMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: app.maxWidth,
    width: '100%',
  },
  logoMobile: {
    border: 'none',
    float: 'left',
    transition: 'all .3s',
    textDecoration: 'none',
  },
  navigationMobile: {
    float: 'right',
    position: 'fixed',
  },
});

export default styles;
