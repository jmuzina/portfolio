export function pluralString(singularBase: string, occurrences:number, pluralSuffix = 's') : string {
  if (occurrences === 1) return singularBase;

  return `${singularBase}${pluralSuffix}`;
}
