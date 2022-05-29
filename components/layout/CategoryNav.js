import { ButtonGroup, Button, Container, } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL, WOO_COMMERCE_KEY, WOO_COMMERCE_SECRET } from '../../constants/api';


export default function CategoryNav() {

    const url = `${BASE_URL}/wc/v2/products/categories?${WOO_COMMERCE_KEY}&${WOO_COMMERCE_SECRET}`;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                let response = await axios.get(url);
                setCategories(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCategories();
    }, []);

    return (
        <Container className="bg-white shadow p-3 h-auto">
            <ButtonGroup vertical>
                {categories.map((data) => {
                    return (
                        <Button className="w-100">{data.name}</Button>
                    )
                })}
            </ButtonGroup>
        </Container>
    )

}


