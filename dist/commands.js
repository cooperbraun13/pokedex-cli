import { commandExit } from "./commandExit.js";
import { commandHelp } from "./commandHelp.js";
import { commandMap } from "./commandMap.js";
import { commandMapb } from "./commandMapb.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Lists all commands of the pokedex",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays name of 20 location areas in the Pokemon world",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays name of the previous 20 location areas in the Pokemon world",
            callback: commandMapb,
        },
    };
}
