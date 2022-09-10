import { ethers } from "ethers"
import nftDriveT from "../img/nftDriveT.png"
//bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'
import React, { useState } from "react";

import { Link } from "react-router-dom";

//import {TesterComponent, TesterFactor, StoreFile} from "../components/TesterComponent"

//<Container>
//      <Row>
//		< Col sm={12} md={12} lg={12} xl={12}>

//				<Button variant="primary">Primary</Button>{' '}

//      </Col>
//      </Row>
//</Container>
//bootstrap

export function HomePageImg(){
    return(<div className="home">
        
        <img className="nftDriveImgHome" src={nftDriveT} alt="nftDriveT" />
    </div>)
}

export function ButtonToApp(){
	return(<div className="MetamaskBtn">
	<Button variant="light"
	onClick={()=>{
		window.location.href = "https://nftdrive.github.io/app/";
	}}
	>Go to App</Button>
	</div>)
}



//export function ButtonToApp(){
//	return(<div className="MetamaskBtn">
//	<Link to={"app"} target="_blank"><Button variant="light"
//	
//	>Go to App</Button></Link>
//	</div>)
//}