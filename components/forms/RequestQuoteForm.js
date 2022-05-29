import { useForm } from 'react-hook-form';

//import EMAIL_REGEX from '../../constants/validation';
import { Button, Form } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api';
import axios from 'axios';


export default function RequestQuoteForm({ machineName }) {
    const { register, handleSubmit } = useForm();

    const url = `${BASE_URL}/contact-form-7/v1/contact-forms/34/feedback`;
    async function onSubmit(data) {
        try {
            const response = await axios.post(url, data)
            console.log(response, response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form className="" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="form-name">
                <Form.Label>Your Name* </Form.Label>
                <Form.Control className="bg-white" type="text" {...register("form-name")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-email">
                <Form.Label>Email* </Form.Label>
                <Form.Control className="bg-white" type="email" {...register("form-email")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-subject">
                <Form.Label>Machine Model</Form.Label>
                <Form.Control name="form-subject" className="bg-white" type="text" value={machineName} {...register("form-subject")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-message">
                <Form.Label>Message</Form.Label>
                <Form.Control name="form-message" className="bg-white" as="textarea" rows={5} placeholder="Your message here"{...register("form-message")} />
            </Form.Group>
            <p>* Required</p>
            <Button className="float-end" variant="primary" type="submit"> Submit</Button>
        </Form>
    )
}