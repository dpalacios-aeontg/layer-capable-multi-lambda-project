const axios = require('axios');
const isOdd = require('is-odd');
let response;

exports.lambdaHandler = async (event, context) => {
    try {
        console.log({'process.env': process.env});
        const req = await axios.get(process.env.HELLO_WORLD_3_API_URL);

        console.log(isOdd(1));
        console.log(isOdd(2));
        console.log(isOdd('3'));
        console.log(isOdd('4'));

        response = {
            'statusCode': req.status,
            'body': JSON.stringify(req.data)
        }
    } catch (err) {
        console.log(err);
        return {
            statusCode: response.status,
            body: response.statusText
        };
    }

    return response
};
