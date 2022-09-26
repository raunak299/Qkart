
import styles from './Filter.module.css'
import checkbox from '../../../images/checkbox.png'
import filterImg from '../../../images/filter.png';
import { useDispatch } from 'react-redux';
import { productDataActions } from '../../../store/Data-Slice';
import { useSelector } from 'react-redux';





function Filter(props) {


    const filter = useSelector((state) => state.productData.filter);
    const maxPrice = useSelector((state) => state.productData.maxPrice);
    const minPrice = useSelector((state) => state.productData.minPrice);


    const filterTriggerHandler = () => {
        props.setFilterTrigger(!props.filterTrigger);
    }

    const clearFilterHandler = () => {
        dispatch(productDataActions.resetFilters());
    }

    const sortingHandler = (e) => {
        const sortIn = e.target.value;
        dispatch(productDataActions.sortProducts({ sortIn }))
    }

    const dispatch = useDispatch();

    const categoryFilterHandler = (e) => {
        const category = e.target.value;
        dispatch(productDataActions.filterByCategories({ category }));
    }

    const sizeFilterHandler = (e) => {
        const size = e.target.value;
        dispatch(productDataActions.filterBySizes({ size }));
    }

    const ratingFilterHandler = (e) => {
        const rating = e.target.value;
        dispatch(productDataActions.filterByRatings({ rating }));
    }

    const priceFilterHandler = (e) => {
        const price = e.target.value;
        dispatch(productDataActions.filterByPrice({ price }));
    }


    return (
        <div className={styles['filter-section']} >

            <div className={styles['filter-trigger']} onClick={filterTriggerHandler}>
                {!props.filterTrigger && <img src={filterImg} alt='' />}
                {!props.filterTrigger && <span>{'FILTER & SORT'}</span>}
                {props.filterTrigger &&
                    <img src="https://img.icons8.com/office/80/000000/cancel.png" className={styles['filter-close-icon']} alt='cancel' />}
            </div>
            <div className={styles['filter-trigger-large-screen']} >
                <img src={filterImg} alt='' />
                <span>{'FILTER & SORT'}</span>
            </div>





            <div className={` ${styles['filter-list']} ${props.filterTrigger ? styles['filter-list-display'] : styles['filter-list-hide']} `}>



                <div className={styles['filter-item-clear']}>
                    <h2 className={styles['filter-item-heading']} onClick={clearFilterHandler}>Clear Filters</h2>
                </div>





                <div className={styles['filter-item']}>
                    <h2>Sort</h2>
                    <div className={styles['radio-input']}>
                        <input type='radio' value='low' name='sortBy' onChange={sortingHandler} checked={filter.sortBy === 'low'}></input>
                        <div className={styles['radio-btn-overlay']}>
                        </div>
                        <label>Lowest Price</label>
                    </div>
                    <div className={styles['radio-input']}>
                        <input type='radio' value='high' name='sortBy' onChange={sortingHandler} checked={filter.sortBy === 'high'}></input>
                        <div className={styles['radio-btn-overlay']}>
                        </div>
                        <label>Highest Price</label>
                    </div>
                </div>






                <div className={styles['filter-item-price']}>
                    <h2>Max Price</h2>
                    <div className={styles['price-slider-label']}>
                        <div>{filter.price}</div>
                    </div>
                    <div>
                        <input type="range" id="volume" name="price" value={filter.price}
                            min={minPrice} max={maxPrice} step={10} onChange={priceFilterHandler} />
                    </div>
                </div>






                <div className={styles['filter-item']}>
                    <h2>Categoriers</h2>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='men' onChange={categoryFilterHandler} checked={filter.categories.includes('men')}></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>Men</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='Women' onChange={categoryFilterHandler} checked={filter.categories.includes('Women')}></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>Women</label>
                    </div>


                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='kids' onChange={categoryFilterHandler} checked={filter.categories.includes('kids')}></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>Kids</label>
                    </div>
                </div>







                <div className={styles['filter-item']}>
                    <h2>sizes</h2>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='s' onChange={sizeFilterHandler} checked={filter.sizes.includes('s')}></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>S</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='m' onChange={sizeFilterHandler} checked={filter.sizes.includes('m')}></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>M</label>
                    </div>
                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='l' onChange={sizeFilterHandler} checked={filter.sizes.includes('l')}></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>L</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='xl' onChange={sizeFilterHandler} checked={filter.sizes.includes('xl')}></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>XL</label>
                    </div>

                    <div className={styles['checkbox-input']}>
                        <input type='checkbox' value='xxl' onChange={sizeFilterHandler} checked={filter.sizes.includes('xxl')}></input>
                        <div className={styles['overlay']}>
                            <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} />
                        </div>
                        <label>XXL</label>
                    </div>
                </div>








                <div className={styles['filter-item']}>
                    <h2>Rating</h2>

                    <div className={styles['radio-input']}>
                        <input type='radio' value='4' name='ratings' onChange={ratingFilterHandler} checked={filter.ratings.includes('4')}></input>
                        <div className={styles['radio-btn-overlay']}>
                            {/* <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} /> */}
                        </div>
                        <label>4 star above</label>
                    </div>


                    <div className={styles['radio-input']}>
                        <input type='radio' value='3' name='ratings' onChange={ratingFilterHandler} checked={filter.ratings.includes('3')}></input>
                        <div className={styles['radio-btn-overlay']}>
                            {/* <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} /> */}
                        </div>
                        <label>3 star above</label>
                    </div>


                    <div className={styles['radio-input']}>
                        <input type='radio' value='2' name='ratings' onChange={ratingFilterHandler} checked={filter.ratings.includes('2')}></input>
                        <div className={styles['radio-btn-overlay']}>
                            {/* <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} /> */}
                        </div>
                        <label>2 star above</label>
                    </div>

                    <div className={styles['radio-input']}>
                        <input type='radio' value='1' name='ratings' onChange={ratingFilterHandler} checked={filter.ratings.includes('1')}></input>
                        <div className={styles['radio-btn-overlay']}>
                            {/* <img src={checkbox} alt='checkbox' className={styles['checkbox-icon']} /> */}
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