import { useState } from 'react';
import './FAQ.scss';
import down from '../../Assets/down_svg.png';
import { initStateFaqForm } from '../../common/constants';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';
import CustomForm from '../../UI/CustomForm/CustomForm';

const Faq = () => {
    const questions = [
        {
            title: 'Есть ли у вас детские секции/группы для детей?',
            answer: 'Для детей с 5 лет у нас доступны секции по триатлону, плаванию и акватлону.',
        },
        {
            title: 'Способы оплаты',
            answer: 'Оплатить за абонемент можно в офисе продаж Триатлон-Центра или онлайн.',
        },
        {
            title: 'График работы',
            answer: 'ПН-ПТ 07.00-23.00 / СБ-ВС 08.00-22.00',
        },
        {
            title: 'Есть ли у Вас отдельные абонементы в зал или бассейн?',
            answer: ' К продаже доступны только комплексные абонементы на 6/12 месяцев. Также доступны секции по интересам.',
        },
        {
            title: 'Что входит в годовой абонемент?',
            answer: 'В абонемент на год входит безлимитное посещение бассейна, финской сауны и тренажерного зала с 7:00 до 23:00. 30 дней заморозки, 2 индивидуальные тренировки с тренером, 3 гостевых посещения',
        },
        {
            title: 'Есть ли у вас индивидуальные тренировки?',
            answer: 'У нас имеются индивидуальные тренировки у всех тренеров. Стоимость тренировки составляет 1500/2000/2500 сом в зависимости от категории тренера. Более подробную информацию о каждом тренере Вы можете найти во вкладке “Тренеры”.',
        }
    ];

    const [openIndex, setOpenIndex] = useState(-1);

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <section className="faq">
            <div className="faq_container">
                <CustomTitle title={'Часто задаваемые вопросы:'}/>
                <div className="chief_block">
                    <div className="all_questions">
                        {questions.map((question, index) => (
                            <div onClick={() => handleToggle(index)} className="boks_questions" key={index}>
                                <div className="inside_box">
                                    <h4 className="title_questions">
                                        {question.title}
                                    </h4>
                                    <img src={down} alt="img" style={{transform: openIndex === index ? 'rotate(180deg)' : '' , transition: '0.5s' }} />
                                </div>
                                {openIndex === index && (
                                    <p className="answer opened">{question.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="additional_questions">
                        <div className="boks_additional">
                            <CustomForm {...initStateFaqForm} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
