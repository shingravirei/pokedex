import * as React from 'react';

import PokeImg from './PokeImg';

const PokeCard = ({ id, name, types }) => {
    return (
        <div className={'poke-card'}>
            <div className={'card-content'}>
                <div className={'card-left'}>
                    <p>#{id}</p>
                    <p className={'card-name'}>{name}</p>
                    {types.map((type) => (
                        <p className={`badge ${type}`} key={type}>
                            {type}
                        </p>
                    ))}
                </div>
                <div className={'poke-img'}>
                    <PokeImg id={id} />
                </div>
            </div>
        </div>
    );
};

export default PokeCard;
