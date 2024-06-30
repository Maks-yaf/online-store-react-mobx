import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import style from "./DeviceItem.module.css";
import star from "../assets/Star-icon.png"
import { useNavigate } from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card className={style.deviceCard} border='light'>
                <Image width={150} height={150} src={device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Iphone</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={13} height={13} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;