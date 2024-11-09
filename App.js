import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window')); // obtiene el tamaño de la pantalla

  useEffect(() => {
    const onChange = ({ window }) => {
      setWindowDimensions(window);
    };
    
    const dimensionsEvent = Dimensions.addEventListener('change', onChange);

    return () => dimensionsEvent?.remove(); // limpieza de eventos al desmontar el componente
  }, []);

  // ajusta los estilos en función del ancho de la pantalla
  const isLargeScreen = windowDimensions.width >= 600;

  return (
    <View style={isLargeScreen ? styles.largeContainer : styles.smallContainer}>
      <Text style={isLargeScreen ? styles.largeText : styles.smallText}>
        {isLargeScreen ? "Pantalla grande" : "Pantalla chica"}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  largeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 40,
  },
  smallContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
    padding: 20,
  },
  largeText: {
    fontSize: 24,
    color: '#333',
  },
  smallText: {
    fontSize: 16,
    color: '#333',
  },
});
