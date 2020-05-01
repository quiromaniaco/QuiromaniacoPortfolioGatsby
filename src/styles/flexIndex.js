const styles = ({ app, breakpoints, typography }) => ({


    flexRow: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    //   width: '50%'
    //   justifyContent: 'space-between',
    //   margin: '0 auto',
    //   minHeight: '100%',
    //   padding: `${typography.pxToRem(16)} ${typography.pxToRem(48)}`,
    //   transition: 'filter .5s, opacity .5s',
    //   boxSizing: 'border-box',
    },
    flexImage: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    flexColumn: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      //   justifyContent: 'space-between',
      //   margin: '0 auto',
      //   minHeight: '100%',
      //   padding: `${typography.pxToRem(16)} ${typography.pxToRem(48)}`,
      //   transition: 'filter .5s, opacity .5s',
      //   boxSizing: 'border-box',
      },
  });
  
  export default styles;
  