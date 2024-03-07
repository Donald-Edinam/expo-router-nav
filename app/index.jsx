import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function HomePage() {
  return (
    <View>
      <Text>index</Text>
      <Link href="/users/1">Go to User</Link>
    </View>
  )
}