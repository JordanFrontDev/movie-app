import React from 'react';
import { calcTime, convertMoney } from '../../helpers';
import './MovieInfoBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill, faTicketAlt } from '@fortawesome/free-solid-svg-icons'

const MovieInfoBar = ({ time, budget, revenue }) => {
    return (
        <div className='rmdb-movieinfobar'>
            <div className='rmdb-movieinfobar-content'>
                <div className='rmdb-movieinfobar-content-col'>
                    <FontAwesomeIcon className='fa-time' name='clock-o' icon={faClock} size='2x' />
                    <span className='rmdb-movieinfobar-info'>Running time: {calcTime(time)}</span>
                </div>
                <div className='rmdb-movieinfobar-content-col'>
                    <FontAwesomeIcon className='fa-budget' name='money' icon={faMoneyBill} size='2x'/>
                    <span className='rmdb-movieinfobar-info'>Budget: {convertMoney(budget)}</span>
                </div>
                <div className='rmdb-movieinfobar-content-col'>
                    <FontAwesomeIcon className='fa-revenue' name='ticket' icon={faTicketAlt} size='2x'/>
                    <span className='rmdb-movieinfobar-info'>revenue: {convertMoney(revenue)}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieInfoBar;