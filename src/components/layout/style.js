const styles = ({ app, breakpoints, typography }) => ({
  '@global': {
    html: {
      [breakpoints.up('xl')]: {
        fontSize: '0.833333vw !important',
      },
    },
  },
  container: {
    minHeight: '100vh',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    overflow: 'scroll',
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    minHeight: '100%',
    padding: `0px`,
    transition: 'filter .5s, opacity .5s',
    boxSizing: 'border-box',
  },
  content: {
    margin: 'auto',
    maxWidth: app.maxWidth,
    width: '100%',
  },
  background: {
    backgroundColor: `white`,
    backgroundSize: 'cover',
  },
});

export default styles;
