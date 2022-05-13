import '../color.css';

const theme = {
   dark: false,
   colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: getComputedStyle(document.body).getPropertyValue('--color-brand-hex'),
      secondary: getComputedStyle(document.body).getPropertyValue('--color-neutral-primary-hex'),
      accent: getComputedStyle(document.body).getPropertyValue('--color-action-brand-darker-hex'),
      error: getComputedStyle(document.body).getPropertyValue('--color-action-negative-darker-hex'),
      info: getComputedStyle(document.body).getPropertyValue('--color-action-brand-darker-hex'),
      success: getComputedStyle(document.body).getPropertyValue('--color-action-positive-darker-hex'),
      warning: getComputedStyle(document.body).getPropertyValue('--color-action-warning-darker-hex')
   }
}

export default theme;
