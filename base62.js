ALPHABETH = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
ALPHABETH_REVERSE = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
  a: 26,
  b: 27,
  c: 28,
  d: 29,
  e: 30,
  f: 31,
  g: 32,
  h: 33,
  i: 34,
  j: 35,
  k: 36,
  l: 37,
  m: 38,
  n: 39,
  o: 40,
  p: 41,
  q: 42,
  r: 43,
  s: 44,
  t: 45,
  u: 46,
  v: 47,
  w: 48,
  x: 49,
  y: 50,
  z: 51,
  0: 52,
  1: 53,
  2: 54,
  3: 55,
  4: 56,
  5: 57,
  6: 58,
  7: 59,
  8: 60,
  9: 61,
};
BASE = ALPHABETH.length;
SIGN_CHARACTER = "$";

function divmod(x, y) {
  return [Math.floor(x / y), x % y];
}

function base62_encode(n) {
  if (n < 0) {
    return SIGN_CHARACTER + num_encode(-n);
  }

  s = [];

  while (true) {
    [n, r] = divmod(n, BASE);
    s.push(ALPHABETH[r]);

    if (n == 0) {
      break;
    }
  }

  return [...s].reverse().join("");
}

function base62_decode(s) {
  if (s[0] == SIGN_CHARACTER) {
    return -num_decode(s.slice(1, s.length));
  }
  let n = 0;

  [...s].forEach((c) => {
    n = n * BASE + ALPHABETH_REVERSE[c];
  });

  return n;
}
