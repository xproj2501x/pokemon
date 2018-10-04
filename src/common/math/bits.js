////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
function bitLength(number) {
  let bitsCounter = 0;

  while ((1 << bitsCounter) <= number) {
    bitsCounter += 1;
  }

  return bitsCounter;
}

function bitsDiff(numberA, numberB) {
  return countSetBits(numberA ^ numberB);
}

function clearBit(number, bitPosition) {
  const mask = ~(1 << bitPosition);

  return number & mask;
}

function countSetBits(originalNumber) {
  let setBitsCount = 0;
  let number = originalNumber;

  while (number) {
    // Add last bit of the number to the sum of set bits.
    setBitsCount += number & 1;

    // Shift number right by one bit to investigate other bits.
    number >>= 1;
  }

  return setBitsCount;
}

function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}

function setBit(number, bitPosition) {
  return number | (1 << bitPosition);
}

function updateBit(number, bitPosition, bitValue) {
  // Normalized bit value.
  const bitValueNormalized = bitValue ? 1 : 0;

  // Init clear mask.
  const clearMask = ~(1 << bitPosition);

  // Clear bit value and then set it up to required value.
  return (number & clearMask) | (bitValueNormalized << bitPosition);
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export {countSetBits, bitLength, updateBit, getBit, setBit, clearBit, bitsDiff};
