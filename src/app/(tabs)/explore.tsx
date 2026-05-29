import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { useFocusEffect, useIsFocused } from 'expo-router';
import { Activity, useCallback, useState } from 'react';


export default function Explore() {
    {/* 
    The `useIsFocused` hook is used to determine whether the current screen is focused or not.
    const isFocused = useIsFocused();
    if(!isFocused) {
        return (
            <View >
                <ActivityIndicator />
            </View>
        )
    }
    */}

    {/* The `useFocusEffect` hook is used to perform side effects when the screen is focused.
        The `useCallback` hook is used to memoize the callback function that is passed to `useFocusEffect`.
    const [hasActivity, setHasActivity] = useState(false);
    useFocusEffect(
        useCallback(() => {
            setHasActivity(true);
        }, [])
    );

    if(!hasActivity) {
        return (
            <View >
                <ActivityIndicator />
            </View>
        )
    }
    */}





    {/* Now the code is the combination of both the above code snippets. 
        The `useIsFocused` hook is used to determine whether the current screen is focused or not, 
        and the `useFocusEffect` hook is used to perform side effects when the screen is focused. 
    */}

    // The `useState` hook is used to create a state variable `price` and a function `setPrice` to update it.
    // any is used as the type of the `price` state variable because the API response can be of any type, and we want to avoid TypeScript errors.
    const [price, setPrice] = useState<any[]>([]);

    // The `useState` hook is also used to create a state variable `loading` and a function `setLoading` to update it, which is used to show a loading indicator when the API call is in progress.
    const [loading, setLoading] = useState(false);

    const isFocused = useIsFocused();

    useFocusEffect(
        useCallback(() => {
            {/* The `isActive` variable is used to prevent setting state on an unmounted component,,
            and also used to prevent when user just quickly switch between tabs and the API call is still in progress, 
            then it will not set the state on an unmounted component.*/}
            let isActive = true;

            const fetchPrice = async() => {
                {/*setLoading(true) is used to show the loading indicator when the API call is in progress. */}
                setLoading(true);
                try {
                    // The `fetch` function is used to make an API call to the CoinDesk API to get the current price of Bitcoin in USD.
                    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
                    // The `json` method is used to parse the response as JSON.
                    const data = await response.json();
                    // The `setPrice` function is used to update the `price` state variable with the current price of Bitcoin in USD, but only if the screen is still focused and the component is still mounted.
                    if(isActive && data && data.bpi){
                        setPrice(Object.values(data.bpi));
                    }
                }
                catch(error) {
                    console.log(error);
                }
                // The `finally` block is used to set the loading state to false after the API call is completed, regardless of whether it was successful or not.
                finally {
                    setLoading(false);
                }
            };

            // The `fetchPrice` function is called to fetch the current price of Bitcoin in USD when the screen is focused.
            fetchPrice();

            {/* The `return` statement is used to clean up the effect when the screen is unfocused or the component is unmounted. 
                And also used to stop the API if user switches tabs */}
            return () => {
                isActive = false;
            };

        }, [])
    );

    if(!isFocused){
        return null;
    }

    return (
        <View >
            {/* The `loading` state variable is used to show the loading indicator when the API call is in progress, 
            and to show the price of Bitcoin when the API call is completed. */}
            {loading ? (
                <ActivityIndicator />
            ) : (
                price.map(stock => (
                    <View key={stock.code}>
                        <Text>{stock.code}: {stock.rate}</Text>
                    </View>
                    )
                )
            )}  

            {/* The `isFocused` variable is used to conditionally render the content of the screen only when it is focused. */}
            {isFocused && <View>
                <Text>Tab Focused ha </Text>
            </View>}          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        justifyContent: "center",
        alignItems: "center",
    },
});