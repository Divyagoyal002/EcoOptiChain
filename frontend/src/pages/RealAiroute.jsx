import React, { useState } from 'react';
import DeliveryOptionsScreen from '../components/RealAI/DeliveryOptionsScreen';
import OutputScreen from '../components/RealAI/OutputScreen';



const RealAiroute = () => {
    const [deliveryOption, setDeliveryOption] = useState('');
    const [output, setOutput] = useState(null);

    const handleOptionSelect = (option) => {
        setDeliveryOption(option);
        // Here you would typically call the optimization function and set the output
        // For example: setOutput(optimizeRoute(option));
    };

    return (
        <div className="min-h-screen bg-light-blue-100 flex flex-col items-center justify-center">
            {output ? (
                <OutputScreen output={output} />
            ) : (
                <DeliveryOptionsScreen onOptionSelect={handleOptionSelect} />
            )}
        </div>
    );
};

export default RealAiroute;