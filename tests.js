it("2+2 = 4", () => {
  expect(2+2).toEqual(4);
});

it('2+3 = 4', () => {
  expect(2+3).toEqual(4)
});

it('2+3 =/= 4', () => {
  expect(2+3).toNotEqual(4)
});

it('[4] to be an Array', () => {
  expect([4]).toBeAnArray()
});

it('[1,2,3,4] to to contain 3', () => {
  expect([1,2,3,4]).toContain(3)
});