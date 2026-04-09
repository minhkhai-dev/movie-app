
export interface MovieOrTV {
  id: string,
  poster_path: string,
  title: string, // movie
  name: string, // TV
}

export interface Genres {
  id: number,
  name: string,
}

export interface LocalSaveItem {
    id: string;
    title: string;     
    poster_path?: string;
    media_type: 'movie' | 'tv';
}