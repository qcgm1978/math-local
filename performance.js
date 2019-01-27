const performance = require('perf_hooks').performance;
const util = require('util');
const debug = util.debuglog('performance');
foo1(10)
function foo1(n) {

    performance.mark('Beginning sanity check');
    let a = 0
    for (i = 0; i < n; i += 1) {
        for (j = 0; j < n; j += 1) {
            a += 1
        }
    }
    performance.mark('Ending sanity checks');
    performance.measure('Inputs validation', 'Beginning sanity check', 'Ending sanity checks');
    const measurements = performance.getEntriesByType('measure');
    measurements.forEach(measurement => {
        // I'm going to make the logs colour-coded, in this case I'm using Green
        debug('\x1b[32m%s\x1b[0m', measurement.name + ' ' + measurement.duration);
    })
    return a

}