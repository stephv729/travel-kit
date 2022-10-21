import { createContext, useContext, useEffect, useState } from "react";
import { getPosts } from "../services/posts-service";

const TripsContext = createContext();

function TripsProvider({ children }) {
  const [posts, setPosts] = useState([]);
 

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch(console.log);
  }, []);

  return (
    <TripsContext.Provider
      value={{
        posts,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
}

function useTrips() {
  return useContext(TripsContext);
}

export { TripsProvider, useTrips };
