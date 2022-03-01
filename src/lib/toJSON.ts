export function toJSON(object: Record<string, string | number>) {
  return JSON.stringify(object, null, 2);
}
