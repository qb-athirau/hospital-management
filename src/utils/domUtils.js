import { useState, useEffect } from 'react';

export const useMedia = mediaQuery => {
    const setInitialValue = () => {
      const mediaList = window.matchMedia(mediaQuery);
      return mediaList.matches;
    };
  
    const [match, setMatch] = useState(setInitialValue());
    const setMatchValue = matchEvent => {
      setMatch(matchEvent.matches);
    };
  
    useEffect(() => {
      const mediaList = window.matchMedia(mediaQuery);
      setMatchValue(mediaList);
      const handler = matchEvent => setMatchValue(matchEvent);
      mediaList.addListener(handler);
      return () => mediaList.removeListener(handler);
    }, []);
    return match;
  };