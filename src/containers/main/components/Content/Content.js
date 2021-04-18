import React from 'react';

import './Content.scss';

const Conent = () => {
    return (
        <div className="Content">
            <div className='Content__content'>
                <h1 className="Content__title">Самое время найти<br/> лучшего друга</h1>
                <p className="Content__subtitle">
                    Волонтерский проект муниципального приюта<br/> для бездомных животных
                    в Печатниках
                </p>
                <button className="Content__button Button Button_blue">
                    Найти друга
                </button>
            </div>
        </div>
    );
};

export default Conent;
