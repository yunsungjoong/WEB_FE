import { createContext } from 'react';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext()

const youtube = new Youtuebe();

export function YoutuebeApiProvider({children}) {
    return (
        <YoutubeApiContext.Provider value={{youtube}}>
            {children}
        </YoutubeApiContext.Provider>
    )
}// 4분 56초 