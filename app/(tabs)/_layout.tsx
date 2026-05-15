import {Tabs} from "expo-router";
import {tabs} from "@/constansts/data";
import {View,Image} from "react-native";
import clsx from "clsx";

import {useSafeAreaInsets} from "react-native-safe-area-context"
import {colors, components} from "@/constansts/theme";

const tabBar = components.tabBar;
const tabsLayout = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const insets = useSafeAreaInsets();
    const TabsIcons = ({focused, icon}: TabIconProps) => {
        return (
            <View className="tabs-icon">
                <View className={clsx('tabs-pill', focused && 'tabs-active')}>
                    <Image
                        source={icon}
                        className="tabs-glyph"
                    />
                </View>
            </View>
        )
    }
    return (<Tabs

        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                height: tabBar.height,
                marginHorizontal: tabBar.horizontalInset,
                borderRadius: tabBar.radius,
                backgroundColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarItemStyle: {
                paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
            },
            tabBarIconStyle:{
                width: tabBar.iconFrame,
                height: tabBar.iconFrame,
                alignItems: 'center',
            }
        }}>
        {tabs.map((tab, index) => (
            <Tabs.Screen key={tab.name}
                         name={tab.name}
                         options={{
                             title: tab.title,
                             tabBarIcon: ({focused}) => (
                                 <TabsIcons focused={focused} icon={tab.icon}/>
                             )
                         }}/>
        ))}
    </Tabs>)
};

export default tabsLayout;
