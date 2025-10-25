import { commandExit } from "./commandExit.js";
import { commandHelp } from "./commandHelp.js";
import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
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
        description: "Displays name of 20 location areas in the Pokemon world"
        callback: commandMap,
    }
  };
}
