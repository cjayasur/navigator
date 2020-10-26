import React, { useState } from "react";
import FeedRoute from "./FeedScreen";
import AlbumRoute from "./AlbumScreen";
import RecentRoute from "./RecentScreen";
import GridRoute from "./GridScreen";
import { BottomNavigation } from "react-native-paper";
import FlexGrid from "./FlexGridScreen";

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "feeds", title: "Feeds", icon: "message", color: "#3F51B5" },
    { key: "albums", title: "Albums", icon: "album", color: "#009688" },
    { key: "recents", title: "Recents", icon: "history", color: "#795548" },
    { key: "grid", title: "Grid", icon: "plus", color: "#52133b" },
    { key: "flexibleGrid", title: "FlexGrid", icon: "minus", color: "#92133b" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feeds: FeedRoute,
    albums: AlbumRoute,
    recents: RecentRoute,
    grid: GridRoute,
    flexibleGrid: FlexGrid,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Screen;
