import {Animated, Image, Text, View} from "react-native";
import {styled} from "nativewind"
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import images from "@/constansts/images";
import {HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS} from "@/constansts/data";
import {icons} from "@/constansts/icon";
import {formatCurrency} from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import SubscriptionCard from "@/components/SubscriptionCard";
import {useState} from "react";
import FlatList = Animated.FlatList;

const SafeAreaView = styled(RNSafeAreaView);
/**
 * Renders the subscriptions home screen including header, balance card, an "Upcoming" horizontal list, and an "All subscriptions" vertical list while tracking which subscription card is expanded.
 *
 * @returns The React element for the subscriptions home screen.
 */
export default function App() {
    const [expandedSubscribeId, setExpandedSubscribeId] = useState<string | null>(null);
    return (
        <SafeAreaView className="flex-1 p-5 bg-background">

            <View>

                <FlatList
                    ListHeaderComponent={
                        (
                            <>
                                <View className="home-header">
                                    <View className="home-user">
                                        <Image source={images.avatar} className="home-avatar"/>
                                        <Text className="home-user-name"> {HOME_USER.name}</Text>
                                    </View>
                                    <Image source={icons.add} className="home-add-icon"/>
                                </View>
                                <View className="home-balance-card">
                                    <Text className="home-balance-label">
                                        Balance
                                    </Text>
                                    <View className="home-balance-row">
                                        <Text className="home-balance-amount">
                                            {formatCurrency(HOME_BALANCE.amount)}
                                        </Text>
                                        <Text className="home-balance-date">
                                            {dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}
                                        </Text>
                                    </View>

                                </View>
                                <View className="mb-5">
                                    <ListHeading
                                        title="Upcoming"
                                    />
                                    <FlatList
                                        data={UPCOMING_SUBSCRIPTIONS}
                                        renderItem={({item}) => (
                                            <UpcomingSubscriptionCard {...item} />
                                        )}
                                        keyExtractor={(item) => item.id}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        ListEmptyComponent={<Text className="home-empty-state">
                                            No upcoming renewals yet.
                                        </Text>}
                                    />

                                </View>
                                <ListHeading
                                    title="All subscriptions"
                                />
                            </>
                        )
                    }
                    data={HOME_SUBSCRIPTIONS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <SubscriptionCard
                            {...item}
                            expanded={expandedSubscribeId === item.id}
                            onPress={() => setExpandedSubscribeId(expandedSubscribeId === item.id ? null : item.id)}
                        />
                    )}
                    extraData={expandedSubscribeId}
                    ItemSeparatorComponent={() => <View className="h-4"/>}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<Text className="home-empty-state">
                        No subscriptions yet. Add your first subscription to get started.
                    </Text>}
                    contentContainerClassName="pb-30"
                />


            </View>
        </SafeAreaView>
    );
}
