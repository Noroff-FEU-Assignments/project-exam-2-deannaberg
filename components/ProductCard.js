import { Card } from 'react-bootstrap';

export default function ProductCard({ machines }) {
    return (<>
        {props.machines.map((data) => {
            return (
                <Card className="border-0 bg-transparent" style={{ width: '12rem' }}>
                    <a href="">
                        <Card.Img className="shadow-sm border-0" variant="top" style={{ width: '100%', height: '10rem' }} src="holder.js/100px180" />
                        <Card.Body className="px-0">
                            <Card.Title>{data.name}</Card.Title>
                        </Card.Body>
                    </a>
                </Card>
            )

        })
        }
    </>
    )
}

