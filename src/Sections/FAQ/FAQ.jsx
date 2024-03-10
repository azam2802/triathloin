import { useState } from 'react';
import './FAQ.scss';
import Input from '../../UI/CustomInput/CustomInput';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            title: 'Каковы варианты членства?',
            answer: 'Мы предлагаем различные варианты членства в соответствии с вашими потребностями. От ежемесячных до годовых планов, вы можете выбрать тот, который лучше всего подходит именно вам. Наш дружелюбный персонал будет рад помочь вам в выборе правильного членства.',
        },
        {
            title: 'Какими удобствами вы располагаете?',
            answer: 'Мы предлагаем различные удобства...',
        },
        {
            title: 'Доступны ли персональные тренеры?',
            answer: 'Да, у нас есть персональные тренеры...',
        },
        {
            title: 'Какие занятия вы предлагаете?',
            answer: 'lorem lorem loremloremloremloremloremloremloremloremloremloremloremlorem ',
        },
        {
            title: 'Какие занятия вы предлагаете?',
            answer: 'lorem lorem loremloremloremloremloremloremloremloremloremloremloremlorem ',
        },
        {
            title: 'Какие занятия вы предлагаете?',
            answer: 'lorem lorem loremloremloremloremloremloremloremloremloremloremloremlorem ',
        },
        {
            title: 'Какие занятия вы предлагаете?',
            answer: 'lorem lorem loremloremloremloremloremloremloremloremloremloremloremlorem ',
        },
    ];

    return (
        <div className="faq">
            <div className="faq_container">
                <h3 className="faq_title">Часто задаваемые вопросы:</h3>
                <div className="chief_block">
                    <div className="all_questions">
                        {questions.map((question, index) => (
                            <div className="boks_questions" key={index}>
                                <h4
                                    className="title_questions"
                                    onClick={() => handleToggle(index)}
                                >
                                    {question.title}
                                </h4>
                                {openIndex === index && (
                                    <p className="answer">{question.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="additional_questions">
                        <div className="boks_additional">
                            <h1 className="title_additional">
                                Остались вопросы?
                            </h1>
                            <p className="min_text">
                                Мы рады ответить на любой Ваш вопрос, выслушать
                                Ваше предложение.
                            </p>
                            <div className="all_inputs">
                                <div className="border_inp">
                                    <input
                                        className="inputp"
                                        type="text"
                                        name="name"
                                        placeholder="Ваше имя*"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="border_inp">
                                    <input
                                        className="inputp"
                                        type="text"
                                        name="phone"
                                        placeholder="+996(___) ___-___"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="border3_inp">
                                    <input
                                        className="inputp3"
                                        type="text"
                                        name="textarea"
                                        placeholder="Напишите Ваш вопрос"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <button className="btn_additional">
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
