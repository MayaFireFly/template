import { detect } from 'detect-browser';


export const getFont = () => {
  const b = detect();
  const os = b.os.toLowerCase();

  if (os.match(/ios/)) {
    return 'SF Pro Display';

  } else if (os.match(/android/)) {
    return 'Roboto';

  } else if (os.match(/windows/)) {
    return 'IBM Plex Sans';
    
  } else {
    return 'sans-serif';
  }
};