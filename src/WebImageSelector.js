//
// Uses Expos standard web view rendering for selecting images on the web
// Should really re-write this ourselves.
//

import React from 'react';

import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri);
    }
};

export const renderWebView = () => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Button
                title="Pick an image from camera roll"
                onPress={pickImage}
            />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                />
            )}
        </View>
    );
};
