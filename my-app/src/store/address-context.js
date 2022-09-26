import React from "react";

const AddressContext = React.createContext({
    addressList: [],
    addNewAddressHandler: (address) => { }
})

export default AddressContext;