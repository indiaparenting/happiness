import React, { useContext, useEffect, useState, useCallback } from 'react';



import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';



const FileHook = ({ uploadFunc }) => {



    const [isLoading, setLoading] = useState(false);




    const checkFileSize = async (fileURI) => {
        const fileSizeInBytes = await FileSystem.getInfoAsync(fileURI);
        return fileSizeInBytes;
    };


    const handleImagePicked = async (pickerResult) => {
        try {
            if (pickerResult.cancelled) {
                alert('Upload cancelled');
                return;
            } else {


                const fileSize = await checkFileSize(pickerResult.uri);
                if (fileSize.size && fileSize.size < 20000000) {
                    setLoading(true);

                    await uploadFunc({ file: pickerResult })
                    setLoading(false);


                } else {
                    alert('Upload cancelled,file size should be less than 20MB');
                    return;
                }


            }
        } catch (e) {
            console.log(e);
            alert('Upload failed');
        }
    };

    const pickImage = async () => {
        let type = "image"
        console.log('Picking image' + type)
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: type === "image" ? ImagePicker.MediaTypeOptions.Images : ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        result.type = type;

        console.log(result);

        if (!result.cancelled) {

            await handleImagePicked(result);
        }
    };

    return (
        { pickImage, isLoading }
    );
};













export default FileHook;
