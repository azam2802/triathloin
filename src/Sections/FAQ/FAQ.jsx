import { useState } from 'react';
import './FAQ.scss';
import down from '../../Assets/down_svg.png';
import { initStateFaqForm } from '../../Shared/constants';
import { CustomTitle, CustomForm } from '@ui';
import { Container } from '@components';

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
        },
    ];

    const [openIndexes, setOpenIndexes] = useState(
        Array.from({ length: questions.length }, () => false)
    );

    const handleToggle = (index) => {
        const updatedIndexes = openIndexes.map((item, ind) => {
            if (ind === index) {
                return !item;
            } else {
                return false;
            }
        });
        setOpenIndexes(updatedIndexes);
    };

    return (
        <section className="faq" id="faq">
            <Container classNames="faqContainer">
                <CustomTitle title={'Часто задаваемые вопросы:'} />
                <div className="faqWrapper">
                    <div className="faqSelects">
                        {questions.map((question, index) => (
                            <div
                                onClick={() => handleToggle(index)}
                                className="faqQuestions"
                                key={index}
                            >
                                <div className="faqBox">
                                    <h4 className="faqTitles">
                                        {question.title}
                                    </h4>
                                    <img
                                        src={down}
                                        alt="img"
                                        style={{
                                            transform: openIndexes[index]
                                                ? 'rotate(180deg)'
                                                : '',
                                            transition: '0.5s',
                                        }}
                                    />
                                </div>

                                {openIndexes[index] && (
                                    <p className="answer opened">
                                        {question.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="faqForm">
                        <CustomForm {...initStateFaqForm} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Faq;