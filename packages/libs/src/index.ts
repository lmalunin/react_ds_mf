interface ISomeInterface {
  x: number,
  y: string
}

export const someInterfaceObject: ISomeInterface = { x: 1, y: 'sss' }

const addNumbers = (a: number, b: number): number => a + b;
export default addNumbers;
