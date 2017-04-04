var expect = require('chai').expect;

var longestWord = require('../workshop').longestWord;

describe('longestWord', function() {
    it('Should return "brown" if passed "the quick brown fox"', function() {
        expect(longestWord('the quick brown fox')).to.equal('brown');
    });

    it('Should work with a single word', function() {
        expect(longestWord('love')).to.equal('love');
    });

    it('Should work with an empty string', function() {
        expect(longestWord('')).to.equal('');
    });
});