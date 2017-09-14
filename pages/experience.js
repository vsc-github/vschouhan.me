import 'isomorphic-fetch';
import React from 'react';
import Head from 'next/head'
import Rellax from 'rellax';

class Experience extends React.Component {

	constructor(){
		super();
	}

	componentDidMount(){
		this.setState({
			rellax: new Rellax('.rellax')
		});
	}

	render() {
		return (
			<div className="experience">
				<Head>
					<title>Professional Experience</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>

				<div className="clouds">
					<img src="/static/img/experience/cloud1.png" alt="~" className="cloud c1"/>
					<img src="/static/img/experience/cloud2.png" alt="~" className="cloud c2"/>
					<img src="/static/img/experience/cloud3.png" alt="~" className="cloud c3"/>
				</div>

				<div className="rellax land" data-rellax-speed=".2"></div>
				<div className="rellax hills" data-rellax-speed=".1"></div>
				<div className="rellax mountains" data-rellax-speed=".05"></div>

				<style jsx>{`
					.experience{
					height: 6000px;
					}
					.land{
						height: 400px;
						width: 100%;
						position: fixed;
						top: 530px;
						background-image: url(/static/img/experience/land.png);
						background-repeat: repeat-x;
						z-index: 50;
					}
					.hills{
						height: 700px;
						width: 100%;
						position: fixed;
						top: 230px;
						background-image: url(/static/img/experience/hills.png);
						background-repeat: repeat-x;
						z-index: 40;
					}
					.mountains{
						height: 700px;
						width: 100%;
						position: fixed;
						top: 100px;
						background-image: url(/static/img/experience/mountains.png);
						background-repeat: repeat-x;
						z-index: 30;
					}
					.clouds{
						position: fixed;
					}
					.cloud{
							position: fixed;
							-webkit-transform: translate3d(0, 0, 0);
							-moz-transform: translate3d(0, 0, 0);
							-o-transform: translate3d(0, 0, 0);
							transform: translate3d(0, 0, 0);
					}
					.c1{
							top: 60px;
							-webkit-animation: cloud 80s linear infinite;
							-moz-animation: cloud 80s linear infinite;
							-o-animation: cloud 80s linear infinite;
							animation: cloud 80s linear infinite;
					}
					.c2{
							top: 30px;
							-webkit-animation: cloud 20s linear infinite;
							-moz-animation: cloud 20s linear infinite;
							-o-animation: cloud 20s linear infinite;
							animation: cloud 20s linear infinite;
					}
					.c3{
							top: 110px;
							left: 170px;
							-webkit-animation: cloud3 60s linear infinite;
							-moz-animation: cloud3 60s linear infinite;
							-o-animation: cloud3 60s linear infinite;
							animation: cloud3 60s linear infinite;
					}

					@keyframes cloud {
						0% {
							left: -1%
						}
						100% {
							left: 120%
						}
					}
					@-webkit-keyframes cloud {
						0% {
							left: -1%
						}
						100% {
							left: 120%
						}
					}
					@-moz-keyframes cloud {
						0% {
							left: -1%
						}
						100% {
							left: 100%
						}
					}

					// CLOUD 3 ANIMATION

					@keyframes cloud3 {
						0% {
							left: -20%
						}
						100% {
							left: 120%
						}
					}
					@-webkit-keyframes cloud3 {
						0% {
							left: -20%
						}
						100% {
							left: 120%
						}
					}
					@-moz-keyframes cloud3 {
						0% {
							left: -20%
						}
						100% {
							left: 100%
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Experience;
