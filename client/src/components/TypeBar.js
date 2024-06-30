import React, {useContext} from 'react';
import style from "./TypeBar.module.css";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";


const TypeBar = observer(() => {
    debugger;

    const {device} = useContext(Context)
    return (
        <ListGroup >
                {device.types.map(type =>
                    <ListGroup.Item
                        action variant="light"
                        key={type.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
        </ListGroup>
    );
});

export default TypeBar;

