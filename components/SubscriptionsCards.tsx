import {Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import {formatCurrency, getMonthsRemaining} from "@/lib/utils";
import clsx from "clsx";
import {SubscriptionCardProps} from "@/type";

const SubscriptionsCards = ({
                                name, price, currency, icon, billing, color, category,
                                plan, renewalDate, onPress, expanded, paymentMethod, startDate, status
                            }: SubscriptionCardProps) => {
    return (
        <Pressable onPress={onPress} className={clsx('sub-card', expanded ? ' sub-card-expanded' : 'bg-card  ')}>
            <View className="sub-head">
                <View className="sub-main">
                    <Image source={icon} className="sub-icon"/>
                    <View className="sub-copy">
                        <Text numberOfLines={1} className="sub-title">
                            {name}
                        </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" className="sub-meta">
                            {
                                category?.trim() || plan?.trim() || (renewalDate ? getMonthsRemaining(renewalDate) : '')
                            }
                        </Text>
                    </View>
                </View>
                <View className="sub-price-box">
                    <Text className="sub-price">
                        {formatCurrency(price, currency)}
                    </Text>
                    <Text className="sub-billing"> {(renewalDate ? getMonthsRemaining(renewalDate) + " months" : '')}
                    </Text>
                </View>
            </View>
            {
                expanded && (
                    <View className="sub-bdy">
                        <View className="gap-2 ">
                            <View className="sub-row">
                                <Text className="sub-label">
                                    Payments
                                </Text>
                                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                                    <Text className="sub-value">
                                        ****{paymentMethod?.slice(-4)}
                                    </Text>

                                </Text>
                                <TouchableOpacity className="rounded-3xl mb-2 border py-1 px-3">
                                <Text className="font-semibold ">
                                    Manage
                                </Text>
                            </TouchableOpacity>
                            </View>
                            <View className="sub-row">
                                <Text className="sub-label">
                                    Plan Details:
                                </Text>
                                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                                    {plan?.trim()}
                                </Text>
                                <TouchableOpacity className="rounded-3xl border py-1 px-3">
                                    <Text className="font-semibold ">
                                        Change
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="mt-2">
                            <TouchableOpacity className="sub-cancel">
                                <Text className="sub-cancel-text">Cancel Subscription</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </Pressable>
    )
}
export default SubscriptionsCards;