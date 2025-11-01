export async function commandMapForward(state) {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    if (!locations) {
        throw new Error("no results to fetch");
    }
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}
