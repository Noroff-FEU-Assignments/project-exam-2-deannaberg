import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL, JWT_TOKEN } from '../../constants/api';
import AuthContext from '../../context/AuthContext';

const schema = yup.object().shape({
    username: yup.string().required("You must enter a username"),
    password: yup.string().required("You must enter a password"),

});

export default function AdminLogin() {
    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [, setAuth] = useContext(AuthContext);
    const url = `${BASE_URL}${JWT_TOKEN}`;
    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);
        console.log(data);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setAuth(response.data);
            router.push("dashboard");

        } catch (error) {
            console.log("error", error);
            setLoginError(error.toString());
        } finally {
            setSubmitting(false);

        }
    }
    return (
        <Form className="bg-white p-4 shadow" onSubmit={handleSubmit(onSubmit)}>
            {loginError && <span>{loginError}</span>}
            <fieldset disabled={submitting}>
                <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>Username {errors.username && <span className="small ms-1 text-danger">{errors.username.message}</span>}</Form.Label>
                    <Form.Control className="bg-white" type="text" {...register("username")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passWord">
                    <Form.Label>Password {errors.password && <span className="small ms-1 text-danger">{errors.password.message}</span>}</Form.Label>
                    <Form.Control className="bg-white" type="text" {...register("password")} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {submitting ? "Logging in..." : "Login"}
                </Button>
            </fieldset>
        </Form>
    )
}