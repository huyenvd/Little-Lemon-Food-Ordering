import { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import globalStyle from '../../style/globalStyle';
import FoodMenuTabCell from '../FoodMenuTabCell/FoodMenuTabCell';
import { fetchAndCacheMenu, loadMenuFromDb } from '../../database/store/menuSlice';
import ActivityIndicatorView from '../ActivityIndicatorView/ActivityIndicatorView';
import { MenuCategories } from '../../utils/EnumTypes';

import { useAppDispatch, useAppSelector } from '../../customHooks/useStore';
import { useMenuItemsByCategory } from '../../customHooks/useMenuItemsByCategory';

const FoodMenuTabContent = () => {
    const route = useRoute();
    const { category } = route.params as { category: MenuCategories };
    const dispatch = useAppDispatch();
    const { items, loading, error } = useAppSelector((state) => state.menu);
    const itemsByCategory = useMenuItemsByCategory(items, category);

    useEffect(() => {
        dispatch(loadMenuFromDb())
        .unwrap()
        .then(res => {
            if(res.length === 0) {
                dispatch(fetchAndCacheMenu())
            }
        })
        .catch(err => {
            console.error('Failed to load menu items', err);
        });
    }, [dispatch]);

    if (loading) return <ActivityIndicatorView />;
    if (error) return (<View style={[globalStyle.flex, globalStyle.backgroundColor]}><Text>{error}</Text></View>);

    return (
        <View style={[globalStyle.flex, globalStyle.backgroundColor]}>
            <FlatList
                data={itemsByCategory}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <FoodMenuTabCell 
                        id = {item.id} 
                        name = {item.name} 
                        price = {item.price} 
                        description = {item.description} 
                        imageUrl = {item.imageUrl} 
                        category = {item.category} />
                )}
            />
        </View>
    );
};

export default FoodMenuTabContent;