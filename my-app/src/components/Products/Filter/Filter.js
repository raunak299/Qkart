
import styles from './Filter.module.css'
import checkbox from '../../../images/checkbox.png'
import filter from '../../../images/filter.png'


function Filter(props) {


    const filterTriggerHandler = () => {
        props.setFilterTrigger(!props.filterTrigger);
    }

    return (
        <div className={styles['filter-section']} >

            <div className={styles['filter-trigger']} onClick={filterTriggerHandler}>
                {!props.filterTrigger && <img src={filter} alt='' />}
                {!props.filterTrigger && <span>{'FILTER & SORT'}</span>}
                {props.filterTrigger &&
                    <img src="https://img.icons8.com/office/80/000000/cancel.png" className={styles['filter-close-icon']} alt='cancel' />}
            </div>

            <div className={styles['filter-trigger-large-screen']} >
                <img src={filter} alt='' />
                <span>{'FILTER & SORT'}</span>
            </div>


            <div className={` ${styles['filter-list']} ${props.filterTrigger ? styles['filter-list-display'] : styles['filter-list-hide']} `}>

                <div className={styles['filter-item-clear']}>
                    <h2 className={styles['filter-item-heading']}>Clear Filters</h2>
                </div>


                <div className={styles['filter-item']}>
                    <h2>Sort</h2>
                    <div className={styles['radio-input']}>
                        <input type='radio' value='low' name='sortBy'></input>
                        <div className={styles['radio-btn-overlay']}>
                        </div>
                        <label>Lowest Price</label>
                    </div>
                    <div className={styles['radio-input']}>
                        <input type='radio' value='high' name='sortBy'></input>
                        <div className={styles['radio-btn-overlay']}>
                        </div>
                        <label>Highest Price</label>
                    </div>
                </div>



                <div className={styles['filter-item-price']}>
                    <h2>Price</h2>
                    <div className={styles['price-slider-label']}>
                        <div>0</div>
                        <div>1K</div>
                        <div>2k</div>
                    </div>
                    <div>
                        <input type="range" id="volume" name="price"
                            min="0" max="2000" step={10} />
                    </div>
                </div>



                <div className={styles['filter-item']}>
                    <h2>Categoriers</h2>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='men'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>Men</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='women'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>Women</label>
                    </div>


                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='children'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>Children</label>
                    </div>
                </div>



                <div className={styles['filter-item']}>
                    <h2>sizes</h2>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='S'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>S</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='M'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>M</label>
                    </div>
                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='L'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>L</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='XL'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>XL</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='XL'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>XL</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='XXL'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>XXL</label>
                    </div>
                </div>

                <div className={styles['filter-item']}>
                    <h2>Rating</h2>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='4'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>4 star above</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='3'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>3 star above</label>
                    </div>


                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='2'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>2 star above</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='1'></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>1 star above</label>
                    </div>
                </div>

            </div>
            {/* </div> */}
        </div>

    );
}

export default Filter;