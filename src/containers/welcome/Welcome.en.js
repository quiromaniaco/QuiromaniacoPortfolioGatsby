import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import contentEN from './content.en';

const { tagline, title, subtitle } = contentEN;


export default () => (
  <>  
  <div style={{  paddingLeft:'5%',}}>
   <Fade in timeout={1000}>
     <h1 style={{ fontSize:'2.5rem', color:'#17252A', fontFamily:'Roboto', fontWeight:'800', letterSpacing: '-0.01562em', lineHeight:'1.1', marginBlockStart:'1rem', marginBlockEnd:'0.5rem'}}>
         {title} 
     </h1> 
   </Fade> 
 </div>
 <div style={{ paddingBottom:15, paddingLeft:'5%',}}>
   <Fade in timeout={1300}>
     <Typography variant='h3' color='textPrimary'>
       {subtitle}
     </Typography>
   </Fade>
 </div>  
</>
)







// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Fade from '@material-ui/core/Fade';
// // import { Animated } from 'components';

// import contentEN from './content.en';

// const { tagline, title, subtitle } = contentEN;

// const WelcomeEN = () => (
//   <>
//     {/* <Typography variant='h3' color='textPrimary'>
//       {tagline}
//     </Typography> */}
//       <Typography variant='h1' color='textPrimary'>
//         {title}
//       </Typography>
    
//     <Fade in timeout={1000}>
// <Typography variant='h3'>{'async'}<span style={{paddingLeft:'2%'}}>{''}</span> {'{'}</Typography>
//     </Fade>
//       <div style={{paddingTop:20, paddingBottom:15, paddingLeft:'5%', width:'100%'}}>
//         <Fade in timeout={1000}>
//           <Typography variant='h3' color='textPrimary'>
//             {subtitle}
//           </Typography>
//         </Fade>
//       </div>
//     <Fade in timeout={1000}>
//       <Typography variant='h3'>{'}'}</Typography>
//     </Fade>
//   </>
// );

// export default WelcomeEN;
