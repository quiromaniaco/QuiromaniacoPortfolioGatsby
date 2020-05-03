// const options = [
//   { to: 'es/', text: 'Perfil' },
//   { to: 'es/resume/', text: 'CV' },
//   { to: 'es/blog/', text: 'Blog' },
//   { to: 'es/devblog/', text: 'Dev Posts' },
//   { to: 'es/projects/', text: 'Proyectos' },
//   { to: 'es/contact/', text: 'Contacto' },
// ];
// 
// export default options;

import { getUserLangKey } from "ptz-i18n"


const langs = ['es', 'en']
const defaultLangKey = 'es'
let langKey = getUserLangKey(langs, defaultLangKey)
var options = []


if (langKey === 'es') {
  options = [
    { to: 'es/', text: 'Perfil' },
    { to: 'es/cv/', text: 'CV' },
    { to: 'es/blog/', text: 'Blog' },
    // { to: 'en/dev/', text: 'Dev Posts' },
    { to: 'es/projects/', text: 'Proyectos' },
    { to: 'es/contact/', text: 'Contacto' },
  ];
} else {
  options = [
    { to: 'en/', text: 'Profile' },
    { to: 'en/cv/', text: 'Resume' },
    { to: 'en/blog/', text: 'Blog' },
    // { to: 'en/dev/', text: 'Dev Posts' },
    { to: 'en/projects/', text: 'Projects' },
    { to: 'en/contact/', text: 'Contact' },
  ];
}

 

export default options;