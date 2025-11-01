import { State } from "./state";

export async function commandMapBack(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }

  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  if (!locations) {
    throw new Error("no results to fetch");
  }

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const loc of locations.results) {
    console.log(`${loc.name}`);
  }
}
