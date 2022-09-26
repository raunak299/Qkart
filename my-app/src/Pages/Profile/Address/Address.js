import AddressForm from "./AddressForm";
import SavedAddress from "./SavedAddress";
import styles from './Address.module.css';
import plusicon from '../../../images/plus-icon.svg';
import { useState } from "react";



function Address() {

    const [addForm, setAddForm] = useState(false);

    const addFormHandler = () => {
        setAddForm(!addForm);
    }



    return (
        <div className={styles['address-sec']}>
            {!addForm && <div className={styles['address-form-trigger']}>
                <img src={plusicon} alt='add' onClick={addFormHandler} />
                <p>Add New Address</p>
            </div>}
            {addForm && <AddressForm addFormHandler={addFormHandler} />}
            {!addForm && <SavedAddress />}
        </div>
    );
}

export default Address;