/* eslint-env jest */
const sum = require('../app')

it('Returns 101', () => {
  expect(sum(101)).toBe(101)
})

it('Add 10 and 3', () => {
  expect(sum(10, 3)).toBe(13)
})

it('Add 3, 5 and 3', () => {
  expect(sum(3, 5, 3)).toBe(11)
})
