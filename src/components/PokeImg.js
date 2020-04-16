import React, { useState } from 'react';
import { getPokeImgUrl } from '../utils';
import { SpinnerCircularFixed } from 'spinners-react';

const PokeImg = ({ id }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <>
            <img
                src={getPokeImgUrl(id)}
                alt={'pokemon'}
                height={'90px'}
                style={{ display: imgLoaded ? 'block' : 'none' }}
                onLoad={() => {
                    setImgLoaded((prevState) => !prevState);
                }}
            />
            {!imgLoaded && (
                <SpinnerCircularFixed
                    color="#ad383a"
                    size={50}
                    speed={125}
                    thickness={100}
                />
            )}
        </>
    );
};

export default PokeImg;
