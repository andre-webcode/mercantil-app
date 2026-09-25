import { Tabs } from 'expo-router';
import { Home, ShoppingCart } from 'lucide-react-native';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0B6645',
        tabBarInactiveTintColor: '#777777',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5EDE8',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Home
              color={color}
              size={size}
            />
          )
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color, size }) => (
            <ShoppingCart
              color={color}
              size={size}
            />
          ),

        }}
      />
    </Tabs>
  );
};

export default TabsLayout;