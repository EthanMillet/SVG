var triangle = require('./triangle')
var circle = require('./circle')
var square = require('./square')




describe('shape', () => {
test('polygon points should match', () => {
const shape = new triangle();
expect(shape.render()).toEqual('polygon points="200,50 300,200 100,200"');
})})

describe('shape', () => {
    test('polygon points should match', () => {
    const shape = new circle();
    expect(shape.render()).toEqual('circle cx="150" cy="100" r="80"');
    })})

describe('shape', () => {
    test('polygon points should match', () => {
    const shape = new square();
    expect(shape.render()).toEqual('rect x="100" y="100" width="100" height="100"');
    })})

