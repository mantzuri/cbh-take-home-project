//  Converted to an ES module to CommonJS
import { createHash } from "crypto";

export function deterministicPartitionKey(event) {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  // Rename to meaningful name, prevent returning undefined value
  let partitionKey = TRIVIAL_PARTITION_KEY;

  if (event) {
    // reduce options, make sure that event.partitionKey is string
    partitionKey = event.partitionKey + "" || JSON.stringify(event);
  }

  // create hash
  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = createHash("sha3-512").update(partitionKey).digest("hex");
  }

  return partitionKey;
}
