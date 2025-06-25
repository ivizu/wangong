import crypto from 'crypto';

export function md5(input: crypto.BinaryLike) {
  const hash = crypto.createHash('md5');
  return hash.update(input).digest();
}

export function md5Hex(input: crypto.BinaryLike) {
  const hash = crypto.createHash('md5');
  return hash.update(input).digest('hex');
}