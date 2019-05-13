import { OrderFactory } from "./ts";
it(`You create a specialized version of a class to represent it in a "null" state, which exposes the same API or interface as the base object.`, () => {
  expect(OrderFactory).toBeInstanceOf(Function);
  expect(true).toBeFalsy();
});
