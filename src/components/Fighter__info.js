import React from 'react'

const Fighter__info = () => {
    return (
        <div className='container'>

                <div className='fighters__card'>
                    <div className="fighter__img">
                        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-10/MAKHACHEV_ISLAM_L_BELTMOCK.png?itok=SzxPwIGS" alt="fighter" />
                    </div>
                    <div className="fighter__info">
                        <p className="fighter__name">
                            Ислам Махачев
                        </p>
                        <p className="fighter__mass">
                            70,3 кг
                            Легкий вес
                        </p>
                        <p className="fighter__ranking">
                            1 место
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Fighter__info