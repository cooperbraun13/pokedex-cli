export async function commandMapb(state) {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const data = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    if (!data) {
        throw new Error("no results to fetch");
    }
    for (const item of data.results) {
        console.log(`${item.name}`);
    }
    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
}
