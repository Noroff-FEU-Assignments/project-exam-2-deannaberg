import { BASE_URL, WOO_COMMERCE_KEY, WOO_COMMERCE_SECRET } from '../../constants/api';
import axios from 'axios';

export default function EquipCategoryNav(props) {
    return (
        <div>
            {props.data.map((category) => {
                return <div className="card" style={{ width: 18 + 'rem' }} key={category.id}>
                    <div className="card-body">
                        <h2 className="card-title">{category.name}</h2>
                    </div>
                </div>
            })}
        </div>
    );

}

export async function getStaticProps() {
    let data = [];
    const URL = `${BASE_URL}/products/categories?${WOO_COMMERCE_KEY}&${WOO_COMMERCE_SECRET}`;

    try {
        const response = await axios.get(URL);
        data = response.data
    } catch (error) {
        console.log(error);
    }
    return {
        props: {
            data: data,
        },
    };
}