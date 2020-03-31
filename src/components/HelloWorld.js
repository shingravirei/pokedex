import React from 'react';

const HelloWorld = () => {
    return (
        <div className={'poke-card'}>
            <div className={'card-content'}>
                <div>
                    <p>#001</p>
                    <p>Bulbassaur</p>
                    <p>grass | poison</p>
                </div>
                <div className={'poke-img'}>
                    <img
                        src={
                            'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png'
                        }
                        alt={'pokemon'}
                        height={'90px'}
                    />
                </div>
            </div>
        </div>
    );
};

export default HelloWorld;
