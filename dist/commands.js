import { commandExit } from "./commandExit.js";
import { commandHelp } from "./commandHelp.js";
import { commandMapForward } from "./commandMapForward.js";
import { commandMapBack } from "./commandMapBack.js";
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
            description: "Get the next page of locations",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Get the previous page of locations",
            callback: commandMapBack,
        },
    };
}
