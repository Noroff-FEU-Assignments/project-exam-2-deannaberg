
import axios from 'axios';
import { BASE_URL } from '../constants/api';


export async function GetStaticProps() {
    let posts = [];
    try {
        const response = await axios.get(BASE_URL);

        posts = response.data
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            posts: posts,
        },
    };
}