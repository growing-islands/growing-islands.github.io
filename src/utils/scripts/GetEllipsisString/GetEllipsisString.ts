export const GetEllipsisString = (value: string, max: number): string => {
  const result = value.length > max ? value.substr(0, max) + '...' : value
  return result
}
