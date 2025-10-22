import { createInterface } from "readline";
import { cleanInput } from "./cleanInput.js";
import { getCommands } from "./getCommands.js";

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", async (input) => {
    try {
      const words = cleanInput(input);
      if (words.length === 0) {
        console.log("Not a valid command");
        return;
      }
      const command = words[0];
      const commands = getCommands();
      if (commands[command]) {
        commands[command].callback(commands);
      } else {
        console.log("Unknown command");
      }
      rl.prompt();
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  });
}
