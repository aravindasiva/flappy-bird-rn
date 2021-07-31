import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import Physics from './physics';

export default function App() {
  const [running, setRunning] = useState(false)
  useEffect(() => {
    setRunning(true)
  }, [])
  return (
    <View style={{flex: 1}}>
      <GameEngine 
        systems={[Physics]}
        entities={entities()}
        running = {running}
        style={{position: 'absolute', top: 0, bottom: 0, right: 0, left:0}}>

      </GameEngine>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
