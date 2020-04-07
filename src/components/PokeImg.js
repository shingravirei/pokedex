import React, { useState } from 'react';

// TODO: FIX THIS!!!
const PokeImg = ({ id }) => {
    const [status, setStatus] = useState('none');
    const [spinnerStatus, setSpinnerStatus] = useState('inline');
    return (
        <>
            <img
                src={`https://raw.githubusercontent.com/shingravirei/pokedex-api/master/images/${id}.png`}
                alt={'pokemon'}
                height={'90px'}
                style={{ display: status }}
                onLoad={() => {
                    console.log(`loaded - ${id}`);
                    setStatus('inline');
                    setSpinnerStatus('none');
                }}
            />
            <div style={{ display: spinnerStatus }} className={'spinner'}></div>
        </>
    );
};

export default PokeImg;
