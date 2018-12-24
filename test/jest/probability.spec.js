it(`https://math.stackexchange.com/questions/357242/calculating-probabilities-over-different-time-intervals`, () => {
    const m = 0.1
    const notHappen = 1 - m
    const notHappenOneYear = Math.pow(notHappen, 12)
    const y = 1 - notHappenOneYear
    expect(y).toBeLessThan(1)
});