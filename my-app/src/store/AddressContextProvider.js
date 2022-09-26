import AddressContext from "./address-context";
import { useState } from "react";

function AddressContextProvider(props) {

    const demoAddress = {
        name: 'John Doe',
        mobileNo: '8866445566',
        pincode: '223344',
        city: 'delhi',
        state: 'delhi',
        altMobile: '9966545345',
        details: 'cannaught place , new delhi , India'
    }

    const [addressList, setAddressList] = useState([demoAddress]);

    const addNewAddressHandler = (address) => {
        const newAddressList = [...addressList, address]
        setAddressList(newAddressList);
    }

    const currentValue = {
        addressList,
        addNewAddressHandler
    }

    return (
        <AddressContext.Provider value={currentValue}>
            {props.children}
        </AddressContext.Provider>
    );
}

export default AddressContextProvider;