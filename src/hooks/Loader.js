import React, { useState, useContext } from 'react';
import { View } from "react-native";


import PostContext from "../context/PostContext"

export default function Loader() {
    const [isReady, setReady] = useState(false);
    const { fetchMyPosts, state, fetchPost } = useContext(PostContext);

    const fetchData = async () => {
        await fetchPost(0);
        await fetchMyPosts(0);
        return true;

    }

    const _cacheResourcesAsync = async () => {


        return await fetchData();
    }

    return (
        isReady === false ? (<AppLoading
            startAsync={_cacheResourcesAsync}
            onFinish={() => setReady(true)}
            onError={console.warn}
        />) : (<View style={{ flex: 1 }}>

        </View>

        )
    );
}