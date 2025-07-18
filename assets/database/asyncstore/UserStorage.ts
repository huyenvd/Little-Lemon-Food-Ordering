import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_STORAGE_KEY = 'user_data';

export type UserPreferences = {
    orderStatus: boolean;
    passwordChanges: boolean;
    specialOffers: boolean;
    newsletter: boolean;
};

export type UserData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    loggedIn: boolean;
    preferences: UserPreferences;
};

export const getDefaultUserData = (): UserData => ({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    loggedIn: false,
    preferences: {
        orderStatus: false,
        passwordChanges: false,
        specialOffers: false,
        newsletter: false,
    },
});

const saveUserData = async (data: UserData): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(USER_STORAGE_KEY, jsonValue);
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const getUserData = async (): Promise<UserData> => {
    try {
        const jsonValue = await AsyncStorage.getItem(USER_STORAGE_KEY);
        if (!jsonValue) {
            return getDefaultUserData();
        }
        const parsed = JSON.parse(jsonValue) as Partial<UserData>;
        return {
            ...getDefaultUserData(),
            ...parsed,
            preferences: {
                ...getDefaultUserData().preferences,
                ...(parsed.preferences ?? {}),
            },
        };
    } catch (e) {
        console.log(e);
        throw e;
    };
};

export const updateUserData = async (updates: Partial<UserData>): Promise<UserData> => {
    try {
        const current = await getUserData();
        const updated: UserData = {
            ...current,
            ...updates,
            preferences: {
                ...current.preferences,
                ...(updates.preferences ?? {}),
            },
        };
        await saveUserData(updated);
        return updated;
    } catch (e) {
        console.log(e);
        throw e;
    };
};

export const clearUserData = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(USER_STORAGE_KEY);
    } catch (e) {
        console.log(e);
        throw e;
    };
};