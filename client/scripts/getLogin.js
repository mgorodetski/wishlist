export const getLogin = async (token) => {
    try {
        const response = await fetch(`${API_URL}/getLogin`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },

        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.err(error);
    }
};
