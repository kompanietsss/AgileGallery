import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

export const setToken = (key, value) =>
  RNSecureStorage.set(key, value, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED,
  });

export const getToken = async key => {
  try {
    return await RNSecureStorage.get(key);
  } catch (error) {
    return null;
  }
};

export const removeToken = key => RNSecureStorage.remove(key);
