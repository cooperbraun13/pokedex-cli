import { createInterface } from "readline";
import { getCommands } from "./commands.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    return {
        readline: rl,
        commands: getCommands(),
    };
}
