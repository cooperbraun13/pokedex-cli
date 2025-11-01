export async function commandMap(state) {
    const data = await state.pokeapi.fetchLocations(state.nextLocationsURL ?? undefined);
    if (!data) {
        throw new Error("no results to fetch");
    }
    for (const item of data.results) {
        console.log(`${item.name}`);
    }
    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
}
