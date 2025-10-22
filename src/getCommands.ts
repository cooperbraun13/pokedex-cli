import { CLICommand } from "./types.js";
import { commandExit } from "./commandExit.js";
import { commandHelp } from "./commandHelp.js";

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
  };
}
