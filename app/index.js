// View = div tag and Text = p tag but in only react-native
import { View, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
// Expo router is similar to react-router
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
    // Defines our router
    const router = useRouter();
    
    return (
        // SafeAreaView allows you to show the content safely without any buttons appearing 
        // over it
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite 
        }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    // Prevents you from seeing the header on the screen
                    headerTitle: "",
                  }} 
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View 
                     style={{ 
                        flex: 1, 
                        padding: SIZES.medium
                    }}>
                        <Welcome 
                        
                        />

                        <Popularjobs />
                        <Nearbyjobs />
                    </View>
                </ScrollView>
        </SafeAreaView>
    )
}

export default Home;