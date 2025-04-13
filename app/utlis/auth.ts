import { Alert } from 'react-native';

export const checkAuth = async (ctx: any) => {
  try {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error('Unauthorized');
    }
    return identity;
  } catch (error) {
    Alert.alert('Authentication Error', error instanceof Error ? error.message : 'Unauthorized');
    throw error; // Re-throw to allow calling code to handle
  }
};