import assert from 'assert';
import jaja from '../jaja.js';

describe('jaja', () => {
    it('adds 2+2', () => {
        assert.equal(jaja('2+2'), 4);
    });
});
