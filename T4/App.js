import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = "Tim A";
  const teamB = "Tim B";

  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert(`${teamA} Menang!`);
      }
    } else if (team === 'B') {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert(`${teamB} Menang!`);
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengelola Skor Futsal</Text>

      <View style={[styles.teamContainer, styles.teamA]}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => increaseScore('A')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => decreaseScore('A')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.teamContainer, styles.teamB]}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => increaseScore('B')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => decreaseScore('B')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Skor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  teamContainer: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    width: '90%',
  },
  teamA: {
    backgroundColor: '#fffbea',
  },
  teamB: {
    backgroundColor: '#e0f4f7',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    padding: 8,
    width: 40,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
