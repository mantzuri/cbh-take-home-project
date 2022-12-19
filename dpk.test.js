import { deterministicPartitionKey } from "./dpk";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toEqual("0");
  });
  it("should return a hash of the event if no partition key", () => {
    const event = { foo: "bar" };
    expect(deterministicPartitionKey(event).match(/^[a-f0-9]{128}$/));
  });
  it("should return hash if the partition key is too long", () => {
    const event = { partitionKey: "a".repeat(300) };
    expect(deterministicPartitionKey(event)).toMatch(/^[a-f0-9]{128}$/);
  });
});
