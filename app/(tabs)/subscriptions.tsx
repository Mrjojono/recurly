import {Animated, Image, Text, View,FlatList} from "react-native";
import React from "react";

import {styled} from "nativewind"
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

import {icons} from "@/constansts/icon";
import {SUBSCRIPTIONS} from "@/constansts/data";


import SubscriptionsCards from "@/components/SubscriptionsCards";

const SafeAreaView = styled(RNSafeAreaView);
const Subscriptions = () => {
    const [expandedSubscribeId, setExpandedSubscribeId] = React.useState<string |null>();

    return (
        <SafeAreaView className="flex-1 p-5 bg-background">
            <View className="sub-head ">
                <View className="p-3 border rounded-full justify-center items-center">
                    <Image
                        source={icons.back}
                        className="w-5 h-5"
                        resizeMode="contain"
                    />
                </View>

                <Text className="sub-title"> My Subscriptions</Text>
                <View className="p-3 border rounded-full justify-center items-center">
                    <Image
                        source={icons.menu}
                        className="w-5 h-5"
                        resizeMode="contain"
                    />
                </View>

            </View>
            <View className="flex-1" >
                <FlatList
                    data={SUBSCRIPTIONS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <SubscriptionsCards
                            {...item}
                            expanded={expandedSubscribeId === item.id}
                            onPress={() => setExpandedSubscribeId(expandedSubscribeId === item.id ? null : item.id)}
                        />
                    )}
                    extraData={expandedSubscribeId}
                    contentContainerClassName="pt-10"
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View className="h-5"/>}

                    ListEmptyComponent={<Text className="home-empty-state">
                        No subscriptions yet. Add your first subscription to get started.
                    </Text>}
                />
            </View>
        </SafeAreaView>
    );
};

export default Subscriptions;
