import { useState } from 'react';
import { Routes } from '../navigation/Routes';
import { updateUserData } from '../database/asyncstore/UserStorage';
import { showAlert } from '../utils/AlertService';


export const useOnboarding = ({ navigation } : {navigation: any}) => {
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email.trim());

    const handleSubmit = async () => {
        try {
            if (!firstName.trim() || !isValidEmail(emailAddress)) {
                showAlert('Error', 'Invalid user information', [{text: 'OK'}]);
                return;
            };

            await updateUserData({
                firstName: firstName,
                email: emailAddress,
                loggedIn: true,
            });

            navigation.navigate(Routes.Home);
        } catch (e) {
            console.error('Error saving using user info.', e);
        }
    };

    return {
        setFirstName,
        setEmail: setEmailAddress,
        handleSubmit,
    };
};