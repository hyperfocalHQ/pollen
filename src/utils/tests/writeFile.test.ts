import fs from 'fs';
import { expect, test, describe } from 'vitest';
import { writeFile } from '..'


describe('writeFile()', () => {
  test('writes to file', () => {
    const file = './test.css'
    const content = 'test'
    writeFile(file, content);
    expect(fs.readFileSync(file, 'utf8')).toBe(content);
    fs.rmSync(file);
  });
  test('writes to file in sub directory', () => {
    const file = './sub/test.css'
    const content = 'test'
    writeFile(file, content);
    expect(fs.readFileSync(file, 'utf8')).toBe(content);
    fs.rmSync(file);
    fs.rmdirSync('./sub');
  });
  test('overwrites file in sub directory', () => {
    const file = './sub/test.css'
    const content = 'test'
    writeFile(file, 'hello');
    writeFile(file, content);
    expect(fs.readFileSync(file, 'utf8')).toBe(content);
    fs.rmSync(file);
    fs.rmdirSync('./sub');
  });
});
