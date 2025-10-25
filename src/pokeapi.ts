export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    // implement this
  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
  }
}

export type ShallowLocations = {
  name: String;
  url_id: number;
};

export type Location = {
  // add properties here
};
