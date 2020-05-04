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
    background:'#8a8a8a',
  },
  menuContainer: {
    position: 'absolute',
    top: typography.pxToRem(16),
    right: typography.pxToRem(-1),
    textAlign: 'right',
    margin: `${typography.pxToRem(16)} 0`,
    // backgroundColor: '#161619',
    padding: '1rem 1rem',
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} 0`,
    textDecoration: 'none',
    color: 'black',
    fontWeight: '300',
    fontSize: '5rem'
  },
  navLinkActive: {
    fontWeight: '500',

  },
});

export default styles;
