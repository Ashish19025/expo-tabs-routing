import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useState } from "react";

import { TabBarContext } from "@/context/TabBarContext";

export default function TabLayout() {
  // The `useState` hook is used to create a state variable `istabbarvisible` and a function `setistabbarvisible` to update it. 
  // The initial value of `istabbarvisible` is set to `true`, which means the tab bar will be visible by default.
  const [setistabbarvisible, istabbarvisible] = useState(true);


  // The `shouldHideMessagesTab` variable is used to determine whether the "Messages" tab should be hidden or not.
  // You can set this variable to `true` or `false` based on your requirements. In this example, it is set to `true`, which means the "Messages" tab will be hidden.
  const shouldHideMessagesTab = false;



  return (
    //The `TabBarContext` component is used to provide the `istabbarvisible` state to the `NativeTabs` component.
    <TabBarContext value ={{istabbarvisible}}>
      {/* The `hidden` prop can be used to hide the tab bar. */}
      {/* The `tabBarRespectsIMEInsets` prop can be used to make the tab bar respect the insets of the keyboard when it is open. */}
    <NativeTabs hidden={setistabbarvisible} tabBarRespectsIMEInsets>
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


      {/* The `disablePopToTop` prop can be used to disable the default 
      behavior of popping to the top of the stack when the tab is reselected. */}

      {/* The `disableScrollToTop` prop can be used to disable the default 
      behavior of scrolling to the top of the content when the tab is reselected. */}
      <NativeTabs.Trigger name="Four" disablePopToTop  disableScrollToTop>
        <NativeTabs.Trigger.Icon sf="star" md="star" />
        <NativeTabs.Trigger.Label>Four</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>


      <NativeTabs.Trigger name="Five" disabled>
        <NativeTabs.Trigger.Icon sf="sterlingsign.arrow.trianglehead.counterclockwise.rotate.90" md="22mp" />
        <NativeTabs.Trigger.Label>Five</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>


      {/* The `disableAutomaticContentInsets` prop can be used to disable the default 
      behavior of adding insets to the content when the tab is selected. 
      This can be useful if you want to have more control over the layout of your content. */}
       <NativeTabs.Trigger 
        name="map" 
        disableAutomaticContentInsets={true} 
      >
        <NativeTabs.Trigger.Label>Map</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

    </NativeTabs>
    </TabBarContext>
  );
}
