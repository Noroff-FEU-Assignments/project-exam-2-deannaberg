import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import EMAIL_REGEX from '../../constants/validation';
import { Button, Form } from 'react-bootstrap';

const subjectOptions = ["purchaseEquipment", "equipmentService", "consultation", "other"];

const schema = yup.object().shape({
    formName: yup.string().required("Enter your first name").min(3, "First name must be at least 3 characters"),
    message: yup.string().required("Enter your message").min(5, "Message name must be at least 10 characters"),
    email: yup.string().required("Please enter your email address").matches(EMAIL_REGEX, "Your email address is not valid"),
    subject: yup.string().required("Please select a subject").oneOf(subjectOptions)

});

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }
    console.log(errors);
    return (
        <Form className="bg-white p-4 shadow" onSubmit={handleSubmit(onSubmit)}>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name*  {errors.formName && <span className="small ms-1 text-danger">{errors.formName.message}</span>}</Form.Label>
                <Form.Control className="bg-white" type="text" {...register("Name")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email* {errors.email && <span className="small ms-1 text-danger">{errors.email.message}</span>}</Form.Label>
                <Form.Control className="bg-white" type="email" {...register("email")} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className="bg-white" type="text" placeholder="Your phone number here" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="subjectSelect">
                <Form.Label>Subject* {errors.subject && <span className="small ms-1 text-danger">{errors.subject.message}</span>}</Form.Label>
                <Form.Select className="bg-white" aria-label="Select subject">
                    <option>Choose...</option>
                    <option value="purchaseEquipment">Purchase Equipment</option>
                    <option value="euipmentService">Equipment Service</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                </Form.Select>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message*  {errors.message && <span className="small ms-1 text-danger">{errors.message.message}</span>}</Form.Label>
                <Form.Control className="bg-white" as="textarea" rows={5} placeholder="Your message here" />
            </Form.Group>
            <p>* Required</p>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}