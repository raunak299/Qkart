import { useState } from "react";

const useHTTP = () => {

    const [errorMsg, setError] = useState('');
    const [isLoading, setLoading] = useState(false);


    const sendRequest = async (requestConfig, applyData) => {
        setLoading(true);
        try {
            let response = await fetch(requestConfig.url,
                {
                    method: requestConfig.method,
                    body: requestConfig.body,
                    headers: requestConfig.headers
                }
            );
            if (!response.ok) {
                let { errors } = JSON.parse(response['_bodyInit']);
                throw new Error(errors[0]);
            }
            let responseData = await response.json();

            applyData(responseData);
        }

        catch (err) {
            setError(err.message);
        }
        setLoading(false);
    }


    return ({
        errorMsg,
        isLoading,
        setError,
        setLoading,
        sendRequest,
    })
}

export default useHTTP;

