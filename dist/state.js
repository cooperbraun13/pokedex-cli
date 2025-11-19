import { createInterface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const interval = 10_000; // 10 seconds
    const cache = new Cache(interval);
    return {
        readline: rl,
        commands: getCommands(),
        pokeAPI: new PokeAPI(cache),
        nextLocationsURL: "",
        prevLocationsURL: "",
    };
}
