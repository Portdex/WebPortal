import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CommunityColumn from "./CommunityColumn";
import * as selectors from '../../store/selectors';
import { fetchAuthorList } from "../../store/actions/thunks";

const AuthorList = () => {
    
    const dispatch = useDispatch();
    const authorsState = useSelector(selectors.authorsState);
    const authors = authorsState.data ? authorsState.data : [];

    useEffect(() => {
        dispatch(fetchAuthorList());
    }, [dispatch]);

    return (
        <div>
            <div className="row">
            { authors && authors.map((author, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <CommunityColumn user={author} />
                </div>
            ))}
            </div>
        </div>
    );
};
export default memo(AuthorList);