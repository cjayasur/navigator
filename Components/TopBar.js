import * as React from "react";
import { Appbar } from "react-native-paper";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const TopBar = () => (
  <Appbar.Header>
    <Appbar.BackAction />
    <Appbar.Content title="Material Design" subtitle="CJ is Building UI in react-native" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
  </Appbar.Header>
);

export default TopBar;
