import './style.scss';
import School from '../../Assets/Placeholder Image.png';
import { useState } from 'react';

const AboutUs = () => {
    const [school, setSchool] = useState(false);

    const moreВetails = () => {
        setSchool(!school);
    };

    return (
        <div className="about__us">
            <div className="about__us_container">
                <h1>О нас</h1>


                <div className="about__us__platfor">
                    <div className="about__us__img">
                        <img src={School} alt="school" />
                    </div>
                    <div className="about__us__content">
                        <h2>TRIATHLON CENTER</h2>
                        <div>
                            <p>Добро пожаловать в наш фитнес-клуб! </p>
                            Наш фитнес-клуб — это место, где забота о вашем
                            здоровье и благополучии становится страстью. Мы
                            создали уютное пространство, где каждый посетитель
                            может обрести не только физическую форму, но и
                            умиротворение для души. Наш фитнес-клуб не просто
                            место для тренировок, это стиль жизни. Мы стремимся
                            вдохновлять вас на заботу о себе, поддерживать вас
                            на пути к лучшей версии себя и делать каждое
                            посещение нашего клуба приятным и продуктивным.
                            Присоединяйтесь к нам и начните свой путь к здоровью
                            и отличной форме уже сегодня!
                        </div>
                        {school && (
                            <div>
                                <p>
                                    Спортивный клуб «Триатлон-Центр» — первый
                                    инклюзивный центр для занятия триатлоном в
                                    Центральной Азии! Мы создаем условия для
                                    комфортных занятий спортом для детей,
                                    взрослых, профессиональных атлетов и людей с
                                    ограниченными возможностями здоровья В
                                    «Триатлон-Центре» будет установлено
                                    высококлассное оборудование по фильтрации
                                    воды в бассейне, что позволит заниматься
                                    плаванием и аллергикам. А в тренажерном зале
                                    оборудование Foreman, станки для занятий
                                    велоспортом ТАСХ NEO 2T от Garmin Весь наш
                                    тренерский состав обладает профильным
                                    обучением, начиная от национального базового
                                    курса до тренеров с международным обучением
                                    или повышением квалификации. Мы уверены, что
                                    наши опытные тренеры помогут вам достичь
                                    ваших спортивных целей и повысить уровень
                                    физической подготовки. Не упустите этот
                                    уникальный шанс стать частью сообщества
                                    Триатлон-Центра и начать свой путь к
                                    здоровому и активному образу жизни.
                                </p>
                            </div>
                        )}
                        <button onClick={moreВetails}>
                            {school ? 'Закрыть' : 'Подробнее'}
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
