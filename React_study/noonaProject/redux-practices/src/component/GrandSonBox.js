import React from 'react';
import { useSelector } from 'react-redux';

const GrandSonBox = () => {
    let count = useSelector(state => state.count)
    return (
        <div>
            <div>{count} GrandSonBox</div>
        </div>
    );
};

export default GrandSonBox;