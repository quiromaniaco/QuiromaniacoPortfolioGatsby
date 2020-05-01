const styles = ({ typography }) => ({
  container: {
    borderRadius: '0%',
    overflow: 'hidden',
    // border: `${typography.pxToRem(2)} solid white`,
    // boxShadow: `0 0 0 ${typography.pxToRem(2)} rgba(0,0,0,.1)`,
    height: typography.pxToRem(40),
    width: typography.pxToRem(40),
  },
  avatar: {
    width: '100%',
  },
});

export default styles;
