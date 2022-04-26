export class Storage {
  public static get(key: string, defaultValue: any = null): any {
    try {
      let str = localStorage.getItem(key)
      if (str == null) return defaultValue
      return JSON.parse(str)
    } catch (e) {
      return defaultValue
    }
  }

  public static has(key: string): boolean {
    return localStorage.hasOwnProperty(key)
  }

  public static set(key: string, value: any): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (e) {
      return false
    }
  }
  public static remove(key: string): boolean {
    try {
      localStorage.removeItem(key)
      return true
    } catch (e) {
      return false
    }
  }
}
