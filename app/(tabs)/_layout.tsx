import { Tabs } from 'expo-router';
import { Home, ShoppingCart } from 'lucide-react-native';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: '#777777',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E8F5E9',
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