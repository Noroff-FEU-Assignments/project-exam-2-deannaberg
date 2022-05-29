
import { Card } from 'react-bootstrap';
export default function EquipCards(props) {
    return (
        <div>
            {props.machines.map((machine) => {
                return <div className="card" style={{ width: 18 + 'rem' }} key={machine.id}>
                    <div className="card-body">
                        <h2 className="card-title">{machine.name}</h2>
                        <div dangerouslySetInnerHTML={{ __html: machine.short_description }} />
                    </div>
                </div>
            })}
        </div>

    );
}

