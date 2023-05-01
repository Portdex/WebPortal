import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { services, InfoProducts } from './constants/filters';
import { filterServices , infoProducts } from '../../store/actions';

const CheckboxProduct = () => {
    const dispatch = useDispatch();

    const handleServices = useCallback((event) => {
        const { id } = event.target;
        dispatch(filterServices({value: id, singleSelect: false}));
    }, [dispatch]);
    

    return (
        <>
          { InfoProducts.map((item, index) => (
        <div class="col-lg-6 d-flex justify-content-center responsive-info mt-3">
        <div className="p-4 info-border text-center">
<input type="checkbox" id={item.value} />
    <label for={item.value}><img src={item.img}/> <br/>
    {item.label}
    </label>
        </div>
        </div>
          ))}
        </>
    );
}

export default memo(CheckboxProduct)