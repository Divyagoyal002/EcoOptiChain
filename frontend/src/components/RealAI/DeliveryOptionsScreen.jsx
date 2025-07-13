import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const DeliveryOptionsScreen = () => {
    const [deliveryType, setDeliveryType] = useState('');
    const history = useHistory();

    const handleSelection = (type) => {
        setDeliveryType(type);
        history.push('/output', { deliveryType: type });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-light-blue-100">
            <h1 className="text-2xl font-bold mb-4">Select Delivery Option</h1>
            <div className="flex flex-col space-y-4">
                <button
                    className="bg-light-blue-300 hover:bg-light-blue-400 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => handleSelection('Regular Delivery')}
                >
                    Regular Delivery
                </button>
                <button
                    className="bg-light-blue-300 hover:bg-light-blue-400 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => handleSelection('Eco Delivery')}
                >
                    Eco Delivery
                </button>
            </div>
        </div>
    );
};

export default DeliveryOptionsScreen;