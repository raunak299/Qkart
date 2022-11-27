import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './AddressForm.module.css'



function AddressForm(props) {



    const nameRef = useRef();
    const mobileNoRef = useRef();
    const pincodeRef = useRef();
    const cityRef = useRef();
    const altMobileRef = useRef();
    const stateRef = useRef();
    const detailsRef = useRef();





    return (
        <form className={styles['address-form']} >
            <input type='text' name='Name' placeholder='Name' maxLength={30} ref={nameRef} />
            <input type='text' name='MobileNo' placeholder='MobileNo' maxLength={10} ref={mobileNoRef} />
            <input type='text' name='pin-code' placeholder='Pin-Code' maxLength={6} ref={pincodeRef} />
            <input type='text' name='city' placeholder='City' maxLength={20} ref={cityRef} />
            <input type='text' name='alt-MobileNo' placeholder='Alternate MobileNo' maxLength={10} ref={altMobileRef} />
            <input type='text' name='state' placeholder='State' maxLength={20} ref={stateRef} />
            <textarea name='address-detail' placeholder='Details' ref={detailsRef} ></textarea>
            <div className={styles['address-form-btn-container']}>
                <div className={styles['address-form-btn']} >
                 <Link to='/orderPlaced' className={styles['checkout-btn']}>
                    <button>Place Order</button>
                </Link> 
                </div>
            </div>
        </form>
    );
}

export default AddressForm;