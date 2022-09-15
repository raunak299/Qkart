import { useState } from "react";
import { useDispatch } from "react-redux";

const useHTTP = () => {

    // const [errorMsg, setError] = useState('');
    const [isLoading, setLoading] = useState(false);


    const sendRequest = async (requestConfig, applyData) => {
        setLoading(true);
        try {
            let response = await fetch(requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    body: requestConfig.body ? requestConfig.body : null,
                    headers: requestConfig.headers ? requestConfig.headers : ''
                }
            );
            if (!response.ok) {
                let { errors } = JSON.parse(response['_bodyInit']);
                throw new Error(errors[0]);
            }
            let responseData = await response.json();
            console.log(responseData)
            applyData(responseData);
        }

        catch (err) {
            // setError(err.message);
            console.log(err.message);
        }
        setTimeout(() => (setLoading(false)), 500);
        // setLoading(false);
    }


    return ({
        isLoading,
        sendRequest,
    })
}

export default useHTTP;

