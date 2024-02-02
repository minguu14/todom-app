const storage = {
    set: (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: <T>(Key: string, defaultValue?: T): T => {
        const value = localStorage.getItem(Key);
        return (value ? JSON.parse(value) : defaultValue) as T;
    },
    remove: (key: string) => {
        localStorage.removeItem(key);
    },
}

export default storage;