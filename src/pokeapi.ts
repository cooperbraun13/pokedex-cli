export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ? pageURL : "https://pokeapi.co/api/v2/location-area";

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `https://pokeapi.co/api/v2/location/${locationName}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}

export type Result = {
  name: string;
  url: string;
};

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};

export type Location = {
  name: string;
};
