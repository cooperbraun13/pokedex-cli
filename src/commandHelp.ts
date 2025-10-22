import { CLICommand } from "./types";

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log(
    "Welcome to the Pokedex!\n \
    Usage: \n\n \
    help: Displays a help message \n \
    exit: Exit the Pokedex"
  );
}
