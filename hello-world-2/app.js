const axios = require('axios');
let response;

exports.lambdaHandler = async (event, context) => {
    try {
        console.log({'process.env': process.env});
        const req = await axios.get(process.env.HELLO_WORLD_2_API_URL);

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
