import * as React from 'react';
import { useHistory } from 'react-router-dom';

import PokeImg from './PokeImg';

const PokeCard = ({ id, name, types }) => {
    let history = useHistory();

    const handlePokeLink = () => {
        history.push(`/${id}`);
    };

    return (
        <div className={'poke-card'} onClick={handlePokeLink}>
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
