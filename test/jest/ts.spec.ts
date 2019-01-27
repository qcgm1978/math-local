it(``, done => {
    function* delegate() {
        const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8]).batch(4);
        await a.forEach(e => {
            expect(e).toEqual()
            done()
        });
        done()
    }
    delegate()
})
it(`Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same`, () => {
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    x = [10, "hello"]; // Error but not interrupt
    expect(_ => x[0].substr(1)).toThrow()
    expect(_ => x[1].substr(1)).not.toThrow()
})
it(`BigInts are part of an upcoming proposal in ECMAScript that allow us to model theoretically arbitrarily large integers. TypeScript 3.2 brings type-checking for BigInts, as well as support for emitting BigInt literals when targeting esnext.`, () => {
    // let foo: bigint = BigInt(100); // the BigInt function
    // let bar: bigint = 100n;        // a BigInt literal

    // // *Slaps roof of fibonacci function*
    // // This bad boy returns ints that can get *so* big!
    // function fibonacci(n: bigint) {
    //     let result = 1n;
    //     for (let last = 0n, i = 0n; i < n; i++) {
    //         const current = result;
    //         result += last;
    //         last = current;
    //     }
    //     return result;
    // }
    // // expect(true).toBeTruthy()
    // expect(fibonacci(10000n)).toBe(1)
})
it('String object', function () {
    expect(true).toBeTruthy()
    const uri = "https://mmtf.rcsb.org/v1.0/full/1MO8", request = 'GET'
    // expect(fetch).toBeInstanceOf()
    // MMTF.fetch(
    //     "3PQR",
    //     // onLoad callback
    //     function (mmtfData) { console.log(mmtfData) },
    //     // onError callback
    //     function (error) { console.error(error) }
    // );
    // $.ajax({
    //     url: uri,
    //     dataType: "binary",
    //     method: request,
    //     data: postdata,
    //     responseType: "arraybuffer",
    //     processData: false
    // })
    //     .done(function (ret, txt, response) {
    //         resolve(ret);
    //     })

});
it(`Default parameters can now be set right inside the function parameters 🎉`, () => {
    expect('\u{1F375}').toBe('🍵')
    const coffeeOrTea = (drink = '🍵') => {
        return drink
    }
    expect(coffeeOrTea()).toBe('🍵')
});