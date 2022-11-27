import AddressForm from "./AddressForm";
import styles from './Address.module.css';




function Address() {

    return (
        <div className={styles['address-sec']}>
            <AddressForm  />
        </div>
    );
}

export default Address;