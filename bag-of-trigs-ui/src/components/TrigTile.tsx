import Card from "react-bootstrap/Card"

export default function TrigTile(props: {title: string, trigFacts: string[], trigImgPath?: string}) {
    return (
        <div className="trig-tile">
            <Card border="dark" bg="transparent" style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    {props.trigImgPath && (
                        <Card.Img src={props.trigImgPath}/>
                    )}
                    <Card.Text>
                        <div>
                            {props.trigFacts.map((fact, index) => {
                                return <p key={`trig-fact-` + index}>{fact}</p>
                            })}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}