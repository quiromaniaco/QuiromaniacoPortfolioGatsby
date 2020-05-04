const styles = ({ palette, typography }) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    zIndex: 10,
  },
  containerMobile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    listStyle: 'none',
    right: 20,
    padding: 10,
    position: 'fixed',
    zIndex: 10,
    mixBlendMode: 'exclusion',
    // color: 'white',
    
  },
});

export default styles;
