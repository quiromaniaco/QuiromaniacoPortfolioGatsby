import { Link } from 'gatsby';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { isMobileView } from 'utils';
import { Navigation } from 'components';

import styles from './style';

type Props = {
  classes: Object,
  width: string,
};

const Header = ({ classes, width }: Props) => (

  <div>

      {isMobileView(width) ? (
        <header className={classes.container}>
          <Link to='/' className={classes.logo}>
          </Link>
          <div className={classes.navigation}>
            <Navigation />
          </div>
        </header>
      ) : (
        <header className={classes.container}>
          <Link to='/' className={classes.logo}>
          </Link>
          <div className={classes.navigation}>
            <Navigation />
          </div>
        </header>
      )}   
  </div>


  
);

export default withStyles(styles)(Header);
