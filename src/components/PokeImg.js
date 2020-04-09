import React, { useState } from 'react';
import { getPokeImgUrl } from '../utils';

const PokeImg = ({ id }) => {
    const [status, setStatus] = useState('none');
    const [spinnerStatus, setSpinnerStatus] = useState('inline');
    return (
        <>
            <img
                src={getPokeImgUrl(id)}
                alt={'pokemon'}
                height={'90px'}
                style={{ display: status }}
                onLoad={() => {
                    setStatus('inline');
                    setSpinnerStatus('none');
                }}
            />
            <div style={{ display: spinnerStatus }} className={'spinner'}></div>
        </>
    );
};

export default PokeImg;
