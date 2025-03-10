import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Typo from '@/components/Typo'
import { colors } from '@/app-example/constants/theme'
import Button from '@/components/Button'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import ScreenWrapper from '@/components/ScreenWrapper'

const Home = () => {

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  

  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}>Logout</Typo>
      </Button>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})