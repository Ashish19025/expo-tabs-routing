import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useState } from "react";

import { TabBarContext } from "@/context/TabBarContext";

export default function TabLayout() {
  const [setistabbarvisible, istabbarvisible] = useState(true);
  return (
    <TabBarContext value ={{istabbarvisible}}>
    <NativeTabs hidden={setistabbarvisible}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>HomePage</NativeTabs.Trigger.Label>
        {/* You can use the `sf` prop to specify icons for iOS and the `md` prop for Android. */}
        <NativeTabs.Trigger.Icon
          sf={{ default: "house", selected: "house.fill" }}
          md={{ default: "home", selected: "home" }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        {/* You can also use the `src` prop to specify a custom icon.*/}
        <NativeTabs.Trigger.Icon
          src={require("../../assets/images/splash-icon.png")}
          // The `renderingMode` prop can be used to control how the icon is rendered.
          // The default value is "template", which means the icon will be rendered as a template image and will inherit the tint color.
          renderingMode="original"
        />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Icon sf="safari" md="explore" />
        {/* The `Badge` component can be used to display a badge on the tab icon. */}
        <NativeTabs.Trigger.Badge>10+</NativeTabs.Trigger.Badge>
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="labelhidden">
        <NativeTabs.Trigger.Icon sf="eye.slash" md="3g_mobiledata" />
        {/* The `hidden` prop can be used to hide the label of the tab. */}
        <NativeTabs.Trigger.Label hidden={true}>Label Hidden</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>


    </NativeTabs>
    </TabBarContext>
  );
}
