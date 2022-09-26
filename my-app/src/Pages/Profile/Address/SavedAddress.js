import React, { useContext } from 'react';
import AddressContext from '../../../store/address-context';
import styles from './SavedAddress.module.css'
import SavedAddressItems from './SavedAddressItems';

function SavedAddress() {

    const addressContx = useContext(AddressContext);
    const addressList = addressContx.addressList;

    return (
        <div className={styles['saved-address-sec']} >
            {addressList.map((address) => (
                < SavedAddressItems address={address} key={Math.random().toString()} />
            ))}
        </div >
    );
}

export default SavedAddress;