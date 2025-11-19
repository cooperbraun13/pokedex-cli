// a single item in the cache
type CacheEntry<T> = {
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
  add<T>(key: string, val: T) {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val,
    };

    this.#cache.set(key, entry);
  }

  // retrieve an entry from the cache
  get<T>(key: string) {
    // if key does not exist, Map.get returns undefined automatically
    const entry = this.#cache.get(key);

    if (entry !== undefined) {
      return entry.val as T;
    }
    return undefined;
  }

  // start a cleanup loop
  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  // delete any entries that are older than the interval
  #reap() {
    const now = Date.now();

    for (const [key, entry] of this.#cache) {
      if (now - entry.createdAt > this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  // stop the interval loop when the cache is being shut down
  stopReapLoop() {
    if (this.#reapIntervalId) {
      clearInterval(this.#reapIntervalId);
      this.#reapIntervalId = undefined;
    }
  }
}
