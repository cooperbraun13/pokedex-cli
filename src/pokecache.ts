// a single item in the cache
export type CacheEntry<T> = {
  createdAt: number; // Date.now() when the entry was created
  val: T; // the value we're caching
};

export class Cache {
  // map of key -> CacheEntry
  #cache = new Map<string, CacheEntry<any>>();
  // timer ID for our cleanup loop (reaper)
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  // how long entries are allowed to live (in ms)
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

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

  // delete any entries that are older than the interval
  #reap(): void {
    const now = Date.now();

    for (const [key, entry] of this.#cache) {
      if (now - entry.createdAt > this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  // start a cleanup loop
  #startReapLoop(): void {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  // stop the interval loop when the cache is being shut down
  stopReapLoop(): void {
    if (this.#reapIntervalId !== undefined) {
      clearInterval(this.#reapIntervalId);
      this.#reapIntervalId = undefined;
    }
  }
}
