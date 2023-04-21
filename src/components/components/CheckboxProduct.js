import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { services,  } from './constants/filters';
import { filterServices } from '../../store/actions';

const CheckboxProduct = () => {
    const dispatch = useDispatch();

    const handleServices = useCallback((event) => {
        const { id } = event.target;
        dispatch(filterServices({value: id, singleSelect: false}));
    }, [dispatch]);
    

    return (
        <>
          
        <div class="col-lg-6 d-flex justify-content-center responsive-info mt-3">
        <div className="p-4 info-border text-center">
<input type="checkbox" id="download" />
    <label for="download"><img src="/img/product/download.png" /> <br/>
    Digital Download
    </label>
        </div>
        </div>
       
        </>
    );
}

export default memo(CheckboxProduct)