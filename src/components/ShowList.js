import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';




const ShowList = ({ navigation, Footer, ItemSeparatorComponent, style, list, Header, paddingTop, fetchData, RenderItem }) => {

    //const memoizedValue = useMemo(() => RenderItem, albumList);




    const [page, setPage] = useState(1);

    const [shouldFetch, setShouldFetch] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);

    // return this function for Flatlist to call onEndReached
    const fetchMore = useCallback(
        () => { setShouldFetch(true) }, []);


    const onRefresh = useCallback(
        () => { setRefreshing(true); setPage(new Number(1)); setShouldFetch(true) }, []);


    useEffect(
        () => {
            // prevent fetching for other state changes
            if (!shouldFetch) {
                return;
            }

            const fetch = async () => {

                const data = await fetchData(page);
                setRefreshing(false);
                console.log(data)
                if (!data) {
                    console.log('no data found for pagination in' + fetchData.name);
                    return;
                }

                const { nextPage, list_count } = data;
                // set the should fetch call to false to prevent fetching
                // on page number update
                if (list_count > 0) {
                    setPage(new Number(nextPage) + 1);
                } else {
                    setPage(new Number(nextPage));
                }

                //increment page for the next call

            };

            fetch();
            setShouldFetch(false);
        },
        // prevent fetching for other state changes
        [page, shouldFetch],
    );





    useEffect(() => {


        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {

                setPage(1);
                setShouldFetch(true);
            }
        );


        // Remove the listener when you are done

        return () => {
            didBlurSubscription.remove();

            mounted = false;
        }


    }, [navigation]);


    return (
        <View style={[{ flex: 1, paddingTop: paddingTop, width: '100%' }]}>
            <FlatList
                style={style}
                data={list}
                initialNumToRender={7}
                renderItem={RenderItem}
                keyExtractor={(item) => item._id.toString()}
                listKey={(item) => item._id.toString()}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
                onEndReached={fetchMore}
                onEndReachedThreshold={0.8}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                ItemSeparatorComponent={ItemSeparatorComponent}
            />
        </View>
    );
};

const _keyExtractor = (item, index) => {
    return this.props.index + "_" + index + '_' + item.id + "_";
}

ShowList.defaultProps = {
    paddingTop: 0.5,
    ItemSeparatorComponent: null,
}

const styles = StyleSheet.create({});

export default ShowList;
