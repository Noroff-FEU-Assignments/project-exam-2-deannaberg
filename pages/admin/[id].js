import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Form, Button, Container } from 'react-bootstrap';
import { WOO_COMMERCE_KEY, WOO_COMMERCE_SECRET } from '../../constants/api';
import useAxios from '../../hooks/useAxios';

export default function EditProduct() {
    const [product, setProduct] = useState(null);
    const [updated, setUpdated] = useState(false);
    const [fetchingProduct, setFetchingProduct] = useState(true);
    const [updatingProduct, setUpdatingProduct] = useState(false);


    const { register, handleSubmit } = useForm();

    const http = useAxios();
    let { id } = useParams();
    const url = `/wc/v2/products/${id}?${WOO_COMMERCE_KEY}&${WOO_COMMERCE_SECRET}`;

    useEffect(
        function () {
            async function getProduct() {
                try {
                    const response = await http.get(url);
                    console.log("response", response.data);
                    setProduct(response.data);
                } catch (error) {
                    console.log(error)
                }
            }
            getProduct();
        }, []);

    async function onSubmit(data) {
        setUpdatingProduct(true);
        setUpdateError(null);
        setUpdated(false);

        console.log(data);

        try {
            const response = await http.put(url, data);
            console.log("response", response.data);
            setUpdated(true);
        } catch (error) {
            console.log("error", error);
            setUpdateError(error.toString());
        } finally {
            setUpdatingProduct(false);
        }
    }

    if (fetchingProduct) return <div>Loading...</div>;
    if (fetchError) return <div>Error loading product</div>;

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {updated && <div className="success">The post was updated</div>}
                <fieldset disabled={updatingProduct}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Control name="title" defaultValue={product.title.rendered} placeholder="Title" {...register("title")} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Control className="bg-white" as="textarea" defaultValue={product.description} {...register("description")} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </fieldset>
            </Form>
        </Container>

    );
}

