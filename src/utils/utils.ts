export const isEmpty = (obj: any) => {
    if (obj === null) return true
    return Object.keys(obj).length === 0
  }