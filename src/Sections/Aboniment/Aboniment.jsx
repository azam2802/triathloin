import './Aboniment.scss';
import { FaCheck } from 'react-icons/fa6';
import AbonimentData from './AbonimentFakeData.json';
import imageKing from '../../Assets/mdi_crown.svg';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';
import ModalWindow from '../../Modules/ModalWindow';
import Requisites from './Requisites/Requisites';
import { useState } from 'react';

const Aboniment = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className="abonement" id="abonement">
            <CustomTitle title={'Абонементы'}/>
            <div className="abonement--blocks">
                {AbonimentData.map((el) => {
                    if (el.id == 2) {
                        return (
                            <div className="blockXits" key={el.id}>
                                <div className="blockXits--term">
                                    <div className="blockXits--term__time">
                                        <h4>{el.term}</h4>
                                        <p>{el.visits}</p>
                                    </div>
                                    <div className="blockXits--term__trend">
                                        <h6>Хит</h6>
                                        <img src={imageKing} alt="img" />
                                    </div>
                                </div>
                                <h2>{el.price}</h2>
                                <button  onClick={() => setModalActive(true)} className="blockXits--btn">Купить</button>
                                <div className="blockXits--linear"></div>
                                <div className="blockXits--possibilities">
                                    <p>
                                        <FaCheck /> <span>{el.frost}</span>
                                    </p>
                                    <p>
                                        <FaCheck /> <span>{el.workout}</span>
                                    </p>
                                    <p>
                                        <FaCheck /> <span>{el.guets}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div className="blockTwo" key={el.id}>
                                <div className="blockTwo--term">
                                    <h4>{el.term}</h4>
                                    <p>{el.visits}</p>
                                </div>
                                <h2>{el.price}</h2>
                                <button  onClick={() => setModalActive(true)} className="blockTwo--btn">Купить</button>
                                <div className="blockTwo--linear"></div>
                                <div className="blockTwo--possibilities">
                                    <p>
                                        <FaCheck /> <span>{el.frost}</span>
                                    </p>
                                    <p>
                                        <FaCheck /> <span>{el.workout}</span>
                                    </p>
                                    <p>
                                        <FaCheck /> <span>{el.guets}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    }
                })}
                <ModalWindow active={modalActive} setActive={setModalActive} >
                    <Requisites/>
                </ModalWindow>
                    
                
            </div>
        </div>
    );
};

export default Aboniment;
