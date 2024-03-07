// const User = require('./models/validUser')
const User = require('./models/userModel');

test('string with a @ without space should result oject of user', () => {
    expect(User.userValidator({ userName: "efrat", email: "tzipi1237@gmail.com", phone: "0583277191" })).toEqual({ value: { userName: "efrat", email: "tzipi1237@gmail.com", phone: "0583277191" } });
});
// toEqualלא ידעתי מה לכתוב ב
test('string with a @ with space ', () => {
    expect(User.userValidator({ userName: "efrat", email: "tzipi1237 @gmail.com", phone: "0583277191" })).toEqual({ value: { userName: "efrat", email: "tzipi1237@gmail.com", phone: "0583277191" } });
});