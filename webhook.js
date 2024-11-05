const fetch = require('node-fetch');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const data = JSON.parse(event.body);

    try {
        const response = await fetch('https://hook.us1.make.com/h3js782gglnh2s6wqqq0txdgyhm7ghqo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Request submitted successfully!' }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'There was an error submitting your request. Please try again later.' }),
        };
    }
};
