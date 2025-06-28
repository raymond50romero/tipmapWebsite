export default function setLoginHelper() {
  const helperMessage = document.getElementById('helper-message');
  helperMessage.innerHTML = 'Login successful!';
  helperMessage.style.display = 'block';

  // k, got a little bit... :D
  // so what you were working on is the popup helper for new login, you need to fade
  // the popup up for 3-5 seconds then fade down with the message. maybe put a progress bar in
}
