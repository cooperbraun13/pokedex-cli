export class Cache {
    // map of key -> CacheEntry
    #cache = new Map();
    // timer ID for our cleanup loop (reaper)
    #reapIntervalId = undefined;
    // how long entries are allowed to live (in ms)
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    // add an entry to the cache
    add(key, val) {
        const entry = {
            createdAt: Date.now(),
            val,
        };
        this.#cache.set(key, entry);
    }
    // retrieve an entry from the cache
    get(key) {
        // if key does not exist, Map.get returns undefined automatically
        const entry = this.#cache.get(key);
        if (!entry) {
            return undefined;
        }
        return entry.val;
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
    // start a cleanup loop
    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }
    // stop the interval loop when the cache is being shut down
    stopReapLoop() {
        if (this.#reapIntervalId !== undefined) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }
}
