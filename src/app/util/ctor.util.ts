export function assignEntriesToObject(assignToObject: any, dataToAssign: any) {
  Object.entries(dataToAssign).forEach((kvPair) => {
    assignToObject[kvPair[0]] = kvPair[1];
  });
}
