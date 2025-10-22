import { CLICommand } from "./types.js";
import { commandExit } from "./commandExit.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    // more commands here
  };
}
