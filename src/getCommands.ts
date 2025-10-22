import { CLICommand } from "./types";
import { commandExit } from "./command_exit";

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
