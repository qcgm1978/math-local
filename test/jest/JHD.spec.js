const { idCardValid } = require('../../JHD/idCardValidation');
it(`身份证号合法性验证`, () => {
    expect(idCardValid(18888)).toBeFalsy()
    expect(idCardValid(18602481788)).toBeFalsy()
    expect(idCardValid(211226197703220218)).toBeFalsy()
});