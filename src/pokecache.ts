// a single item in the cache
export type CacheEntry<T> = {
  createdAt: number; // Date.now() when the entry was created
  val: T; // the value we're caching
};

export class Cache {
  // map of key -> CacheEntry
  #cache = new Map<string, CacheEntry<any>>();

  // add an entry to the cache
  add<T>(key: string, val: T): void {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val,
    };

    this.#cache.set(key, entry);
  }

  // retrieve an entry from the cache
  get<T>(key: string): CacheEntry<T> | undefined {
    // if key does not exist, Map.get returns undefined automatically
    return this.#cache.get(key);
  }
}
