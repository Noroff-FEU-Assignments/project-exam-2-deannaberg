import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//import Stack from 'react-bootstrap/Stack';

export default function Search() {
    return (
        <Form className="d-flex align-content-center">
            <Form.Label htmlFor="searchInputGroup" visuallyHidden>
                Search
            </Form.Label>
            <InputGroup className="">
                <Form.Control size="sm" className="rounded-pill bg-white" id="searchInputGroup" placeholder="Search" />
            </InputGroup>
        </Form>
    )
}