const styles = ({ palette, typography }) => ({
  menuIcon: {
    cursor: 'pointer',
    color: 'white',
  },
  cover: {
    position: 'fixed',
    padding:0,
    margin:0,
    top:0,
    left:0,
    width: '100%',
    height: '100%',
    background:'#848484',
    // content: '',
    // filter: 'blur(10px)',
    // boxShadow: 'inset 0 0 0 0px rgba(255,255,255,0.3)',
  },

  menuContainer: {
    position: 'absolute',
    top: typography.pxToRem(16),
    right: typography.pxToRem(-1),
    textAlign: 'right',
    margin: `${typography.pxToRem(-40)} 0`,
    // backgroundColor: '#161619',
    padding: '-1rem 1rem',
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} 0`,
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
    fontSize: '5rem',
    cursor: 'pointer',
  },
  navLinkActive: {
    fontWeight: '500',

  },
});

export default styles;
