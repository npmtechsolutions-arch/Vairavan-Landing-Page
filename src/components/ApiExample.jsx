import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ApiExample = () => {
    const [items, setItems] = useState([]);
    const [newItemTitle, setNewItemTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 1. Fetch Items (GET)
    const fetchItems = async () => {
        setLoading(true);
        try {
            const response = await api.get('/items/');
            setItems(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch items');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // 2. Create Item (POST)
    const handleCreate = async (e) => {
        e.preventDefault();
        if (!newItemTitle) return;

        try {
            const response = await api.post('/items/', {
                title: newItemTitle,
                description: 'Created from React',
                completed: false
            });
            setItems([...items, response.data]);
            setNewItemTitle('');
        } catch (err) {
            setError('Failed to create item');
            console.error(err);
        }
    };

    // 3. Update Item (PUT)
    const handleToggleComplete = async (id, currentStatus, currentItem) => {
        try {
            const response = await api.put(`/items/${id}`, {
                ...currentItem,
                completed: !currentStatus
            });

            setItems(items.map(item =>
                item.id === id ? response.data : item
            ));
        } catch (err) {
            setError('Failed to update item');
            console.error(err);
        }
    };

    // 4. Delete Item (DELETE)
    const handleDelete = async (id) => {
        try {
            await api.delete(`/items/${id}`);
            setItems(items.filter(item => item.id !== id));
        } catch (err) {
            setError('Failed to delete item');
            console.error(err);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>FastAPI + React Integration</h1>

            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

            <form onSubmit={handleCreate} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newItemTitle}
                    onChange={(e) => setNewItemTitle(e.target.value)}
                    placeholder="New item title"
                    style={{ padding: '8px', marginRight: '10px' }}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Add Item'}
                </button>
            </form>

            {loading && <p>Loading...</p>}

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {items.map(item => (
                    <li key={item.id} style={{
                        border: '1px solid #ddd',
                        padding: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            textDecoration: item.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                        }}
                            onClick={() => handleToggleComplete(item.id, item.completed, item)}
                        >
                            {item.title}
                        </span>
                        <button
                            onClick={() => handleDelete(item.id)}
                            style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApiExample;
