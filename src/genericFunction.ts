const createArryWithString = (value: string) => [value];

const createArryWithNumber = (value: number) => [value];

const createArryWithBoolean = (value: boolean) => [value];

const createArryWithObject = (value: { id: number; name: string }) => { return [value]; };


const createArrayWithGeneric = <T>(value: T): T[] => [value];

const arrString = createArryWithString('Hello');
const arrNumber = createArryWithNumber(42);
const arrBoolean = createArryWithBoolean(true);
const arrObject = createArryWithObject({ id: 1, name: 'Sohag' });