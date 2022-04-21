import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';
import { Card, Button, CardGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);

    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);

    const handleSearchField = e => {
        const serchTextValue = e.target.value;
        setSearchText(serchTextValue);
    }
    return (
        <>
            <div className='seachc-filed '>
                <input onChange={handleSearchField} className=' p-1 my-2' type='text' placeholder='Serch your foods' />
            </div>
            <div className='foods'>

                <div>
                    <Row md={4} className="g-4">
                        {
                            meals.map(meal => <Meal
                                key={meal.idMeal}
                                meal={meal}
                            >
                            </Meal>)
                        }
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Restaurant;