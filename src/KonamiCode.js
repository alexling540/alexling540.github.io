const allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};
// the 'official' Konami Code sequence Change this to you code
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
// a variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;
document.addEventListener('keydown', (e) => {
  let key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  let requiredKey = konamiCode[konamiCodePosition];
  // compare the key with the required key
  if (key === requiredKey) {
    // move to the next key in the konami code sequence
    konamiCodePosition++;
    // if the last key is reached, activate cheats
    if (konamiCodePosition === konamiCode.length) {
      setTheme('vaporwave');
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});