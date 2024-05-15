import { useEffect, useState } from 'react'
import { CustomTitle, CustomButton } from '@ui'
import Requisites from './Requisites/Requisites'
import './Subscription.scss'
import { Container } from '@components'
import crown from '@assets/crown.svg'
import { useTranslation } from 'react-i18next'
import { axiosAPI } from '@/App'

export const Subscription = () => {
    const [modalActive, setModalActive] = useState(false)
    const [subsData, setSubsData] = useState()
    const { t, i18n } = useTranslation()

    const fetchSubscription = async () => {
        try {
            const response = await axiosAPI.get('/abonements/');
            setSubsData(response.data);
        } catch (e) {
            console.error('Error fetching data from abonements:', e)
            return { 'abonements': null }
        }
    }

    console.log(subsData);

    useEffect(() => {
        fetchSubscription()
    }, [i18n.language])

    return (
        <section className="subscription">
            <Container classNames="subscriptionContainer">
                <div id="subscription">
                    <CustomTitle title={t('aboniment')} />
                </div>
                <ul className="subscriptionList">
                    {subsData &&
                        subsData.map((subscription) => (
                            <li
                                className={`subscriptionCard ${
                                    subscription.special ? 'prime' : 'default'
                                }`}
                                key={subscription.id}>
                                <div className="subscriptionCardHeader">
                                    <div className="subscriptionCardTitle">
                                        <h5>{subscription.title}</h5>
                                        <p>{subscription.time}</p>
                                    </div>
                                    {subscription.special && (
                                        <span className="subscriptionCardHit">
                                            <h5>Хит</h5>
                                            <img src={crown} alt="хит" />
                                        </span>
                                    )}
                                </div>
                                <div className="subscriptionCardActions">
                                    <h3>{subscription.price}</h3>
                                    <CustomButton
                                        onClick={() => setModalActive(true)}
                                        type={
                                            subscription.special
                                                ? 'secondary'
                                                : 'primary'
                                        }>
                                        {t('buy')}
                                    </CustomButton>
                                    <hr />
                                </div>
                                <ul className="subscriptionCardItems">
                                    <li>
                                        <p>{subscription.mark_freeze}</p>
                                        {subscription.freeze}
                                    </li>
                                    <li>
                                        <p>{subscription.mark_trainer}</p>
                                        {subscription.trainer}
                                    </li>
                                    <li>
                                        <p>{subscription.mark_guest}</p>
                                        {subscription.guest}
                                    </li>
                                </ul>
                            </li>
                        ))}
                </ul>
            </Container>
            <Requisites isOpen={modalActive} close={() => setModalActive(false)} />
        </section>
    )
}
