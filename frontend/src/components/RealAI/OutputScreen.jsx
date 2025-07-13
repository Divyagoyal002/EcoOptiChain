import React from 'react';

const OutputScreen = ({ deliveryOption, result }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-blue-50">
            <h1 className="text-2xl font-bold mb-4">Delivery Option Selected: {deliveryOption}</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-2">Optimization Result:</h2>
                <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
            </div>
        </div>
    );
};

export default OutputScreen;