import { v1 } from 'uuid';

export const generateNewUuidV1 = (): string => {
  return v1();
};

export const uuidToBin = (uuid: string): Buffer => {
  return Buffer.from(uuid.replace(/-/g, ''), 'hex');
};

export const binToUuid = (binaryUuid: Buffer): string => {
  const hexUuid: string = binaryUuid.toString('hex');
  return `${hexUuid.slice(0, 8)}-${hexUuid.slice(8, 12)}-${hexUuid.slice(12, 16)}-${hexUuid.slice(
    16,
    20,
  )}-${hexUuid.slice(20)}`;
};
