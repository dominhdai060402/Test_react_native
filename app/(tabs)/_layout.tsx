import CustomTabs from '@/components/CustomTabs'
import { Tabs } from 'expo-router'
import React from 'react'

const Layout = () => {
  return (
    //screenOptions={{ headerShown: false}} hiện thanh trên
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false}}>
      <Tabs.Screen name="index" />

      <Tabs.Screen name="statistics"  />

      <Tabs.Screen name="wallet"  />

      <Tabs.Screen name="profile"  />
    </Tabs>
  )
}

export default Layout
