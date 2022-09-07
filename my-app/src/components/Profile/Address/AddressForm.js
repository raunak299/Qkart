import { useContext, useRef } from 'react';
import AddressContext from '../../store/address-context';
import ButtonSecondary from '../../ui/ButtonSecondary';
import styles from './AddressForm.module.css'


function AddressForm(props) {

    const addressContx = useContext(AddressContext);

    const addFormHandler = () => {
        props.addFormHandler();
    }

    const nameRef = useRef();
    const mobileNoRef = useRef();
    const pincodeRef = useRef();
    const cityRef = useRef();
    const altMobileRef = useRef();
    const stateRef = useRef();
    const detailsRef = useRef();



    const addressFormSubmitHandler = (e) => {
        e.preventDefault();
        const address = {
            name: nameRef.current.value,
            mobileNo: mobileNoRef.current.value,
            pincode: pincodeRef.current.value,
            city: cityRef.current.value,
            altMobile: altMobileRef.current.value,
            state: stateRef.current.value,
            details: detailsRef.current.value,
        }
        console.log(address);
        addressContx.addNewAddressHandler(address);
        addFormHandler();
    }

    return (
        <form className={styles['address-form']} onSubmit={addressFormSubmitHandler}>
            <input type='text' name='Name' placeholder='Name' maxLength={30} ref={nameRef} />
            <input type='text' name='MobileNo' placeholder='MobileNo' maxLength={10} ref={mobileNoRef} />
            <input type='text' name='pin-code' placeholder='Pin-Code' maxLength={6} ref={pincodeRef} />
            <input type='text' name='city' placeholder='City' maxLength={20} ref={cityRef} />
            <input type='text' name='alt-MobileNo' placeholder='Alternate MobileNo' maxLength={10} ref={altMobileRef} />
            <input type='text' name='state' placeholder='State' maxLength={20} ref={stateRef} />
            <textarea name='address-detail' placeholder='Details' ref={detailsRef} ></textarea>
            <div className={styles['address-form-btn-container']}>
                <div className={styles['address-form-btn']} >
                    <button>Add</button>
                </div>
                <div className={styles['address-form-btn']} onClick={addFormHandler}>
                    <ButtonSecondary>Cancel</ButtonSecondary>
                </div>
            </div>
        </form>
    );
}

export default AddressForm;