import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { services,  } from './constants/filters';
import { filterServices } from '../../store/actions';

const ServicesCheckbox = () => {
    const dispatch = useDispatch();

    const handleServices = useCallback((event) => {
        const { id } = event.target;
        dispatch(filterServices({value: id, singleSelect: false}));
    }, [dispatch]);
    

    return (
        <>
            <div className="item_filter_group">
              <h4>Select Services</h4>
              <div className="de_form">
                  { services.map((item, index) => (
                    <div className="de_checkbox" key={index}>
                        <input 
                            id={item.value} 
                            name={item.value} 
                            type="checkbox" 
                            value={item.value}
                            onChange={handleServices}
                        />
                        <label htmlFor={item.value}>{item.label}</label>
                    </div>
                  ))}
              </div>
          </div>
        </>
    );
}

export default memo(ServicesCheckbox)