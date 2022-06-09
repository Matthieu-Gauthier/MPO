import '../themes/colors.css';

const theme = {
   dark: false,
   colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: getComputedStyle(document.body).getPropertyValue('--primary-color'),
      secondary: getComputedStyle(document.body).getPropertyValue('--secondary-color'),
      accent: getComputedStyle(document.body).getPropertyValue('--accent-color'),
      error: getComputedStyle(document.body).getPropertyValue('--error-color'),
      info: getComputedStyle(document.body).getPropertyValue('--info-color'),
      success: getComputedStyle(document.body).getPropertyValue('--success-color'),
      warning: getComputedStyle(document.body).getPropertyValue('--warning-color')
   }
};

export default theme;
