import React, { createContext, useState, useEffect, useRef } from "react";
import AppText from "../styles/AppText";

const INTERESTS = [
   {
      id: 1,
      name: AppText.AppInterests.feed,
      shortName: AppText.AppInterests.feed,
      translateName: "Feed",
   },
   {
      id: 2,
      name: AppText.AppInterests.miracleStories,
      shortName: AppText.AppInterests.miracleStories,
      translateName: "Miracle Stories",
   },
   {
      id: 3,
      name: AppText.AppInterests.inspirationalStories,
      shortName: AppText.AppInterests.inspirationalStories,
      translateName: "Inspirational Stories",
   },
   {
      id: 4,
      name: AppText.AppInterests.mutualAid,
      shortName: AppText.AppInterests.mutualAid,
      translateName: "Mutual Aid",
   },
   {
      id: 5,
      name: AppText.AppInterests.volunteering,
      shortName: AppText.AppInterests.volunteering,
      translateName: "fun with baby",
   },
   {
      id: 6,
      name: AppText.AppInterests.donate,
      shortName: AppText.AppInterests.donate,
      translateName: "Donate",
   },
];

export const FeedContext = createContext({});
export const FeedContextFunctions = createContext({});
export const FullDataContext = createContext({});

export const FeedContextProvider = ({ children }) => {
   const [feed, setFeed] = useState([]);
   const [userPosts, setUserPosts] = useState([]);
   const [feedToShow, setFeedToShow] = useState([]);
   const [interests, setInterests] = useState(INTERESTS);
   const [currentInterest, setCurrentInterest] = useState(interests[0]);

   const fullDataPostsCacheRef = useRef({ feed: {}, posts: {} });

   useEffect(() => {
      if (currentInterest.id === 1) {
         setFeedToShow(feedToShow);
      }
      if (currentInterest.id === 2) {
         setFeedToShow(userPosts);
      }
      if (currentInterest.id === 3) {
         setFeedToShow(feedToShow);
      }
      if (currentInterest.id === 4) {
         setFeedToShow(feedToShow);
      }
      if (currentInterest.id === 5) {
         setFeedToShow(feedToShow);
      }
      if (currentInterest.id === 6) {
         setFeedToShow(feedToShow);
      }
   }, [currentInterest, feedToShow, userPosts]);

   const context = { feed, userPosts, interests, currentInterest };
   const contextFunctions = useRef({ setFeed, setUserPosts, setInterests, setCurrentInterest });

   return (
      <FeedContext.Provider value={context}>
         <FeedContextFunctions.Provider value={contextFunctions.current}>
            <FullDataContext.Provider value={fullDataPostsCacheRef.current}>{children}</FullDataContext.Provider>
         </FeedContextFunctions.Provider>
      </FeedContext.Provider>
   );
};
