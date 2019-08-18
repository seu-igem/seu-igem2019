import md5 from 'md5';
import fs from 'fs-extra';

export function delay(second = 1) {
  return new Promise(r => {
    setTimeout(r, second * 1000);
  });
}

/**
 * `filepath` should be relative to `assets` directory.
 * Legal format: `dir/dir/file`
 */
export function fileAndFilePathHash(filepath: string) {
  if (!/^([0-9a-zA-Z\-\.]+\/)*[0-9a-zA-Z\-\.]+$/.test(filepath) ||
    !fs.existsSync('../assets/' + filepath)) {
    throw new Error('invalid filepath');
  }

  return md5(
    filepath + md5(fs.readFileSync('../assets/' + filepath))
  ).substring(0, 8);
}
