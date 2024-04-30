import Image from "react-bootstrap/Image"

import './_style.scss';

export default function TrigTile(props: {title: string, trigFacts: string[], trigImgPath?: string}) {
  return (
    <div className="trig-tile">
      <p>{props.title}</p>
      {props.trigImgPath && (
        <Image src={props.trigImgPath} width="90%"/>
      )}
      <div>
        {props.trigFacts.map((fact, index) => {
          return <p key={`trig-fact-` + index}>{fact}</p>
        })}
      </div>
    </div>
  );
}