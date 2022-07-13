let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

function check(str, char) {
  if (str.includes(char.toLowerCase())) {
    return true;
  }
  return false;
}

console.log(check(byteSequence, 'x'));