import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useState } from "react";

import { TabBarContext } from "@/context/TabBarContext";

export default function TabLayout() {
  // The `useState` hook is used to create a state variable `istabbarvisible` and a function `setistabbarvisible` to update it.
  // The initial value of `istabbarvisible` is set to `true`, which means the tab bar will be visible by default.
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  // The `shouldHideMessagesTab` variable is used to determine whether the "Messages" tab should be hidden or not.
  // You can set this variable to `true` or `false` based on your requirements. In this example, it is set to `true`, which means the "Messages" tab will be hidden.
  const shouldHideMessagesTab = false;

  return (
    //The `TabBarContext` component is used to provide the `istabbarvisible` state to the `NativeTabs` component.
    <TabBarContext value={{ istabbarvisible: setIsTabBarVisible }}>
      {/* The `hidden` prop can be used to hide the tab bar. */}
      {/* The `tabBarRespectsIMEInsets` prop can be used to make the tab bar respect the insets of the keyboard when it is open. */}
      <NativeTabs hidden={!isTabBarVisible} tabBarRespectsIMEInsets>
        <NativeTabs.Trigger name="index" hidden={shouldHideMessagesTab}>
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
            src={require("../../../assets/images/splash-icon.png")}
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
          {/* The `Label` component is used to specify the label of the tab. */}
          <NativeTabs.Trigger.Label hidden={false}>Explore</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>



        {/* The `disablePopToTop` prop can be used to disable the default 
      behavior of popping to the top of the stack when the tab is reselected. */}
      
        {/* The `disableScrollToTop` prop can be used to disable the default 
      behavior of scrolling to the top of the content when the tab is reselected. */}

      {/*disabled prop If true, the tab is shown but cannot be selected by tapping it in the tab bar */}
        <NativeTabs.Trigger name="Four" disablePopToTop disableScrollToTop disabled>
          <NativeTabs.Trigger.Icon sf="star" md="star" />
          <NativeTabs.Trigger.Label>Four</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* The `disableAutomaticContentInsets` prop can be used to disable the default 
      behavior of adding insets to the content when the tab is selected. 
      This can be useful if you want to have more control over the layout of your content. */}
        <NativeTabs.Trigger name="map" disableAutomaticContentInsets={false}>
          <NativeTabs.Trigger.Label>Map</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </TabBarContext>
    
  );
}
