export const useLocalStorage = (key: string) => {

    // Set items
    const setItem = (value: unknown) => {
        try {

            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };

    // Get items

    const getItem = () => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : undefined;
        } catch (error) {
            console.error('Error retrieving from localStorage:', error);

        }
    }

    // Remove items
    const removeItem = () => {
        try{
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing from localStorage:', error);

        }
    }

    return { setItem, getItem, removeItem }
}