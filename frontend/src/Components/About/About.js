import React, { Component } from 'react'
import './About.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from '../../Navbar/Navbar';

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      <div className='bg'>
        <h1 style={{marginBottom:'30px', fontSize:'40px', color:'rgba(22, 22, 22, 0.77)'}}>ABOUT US</h1>
       <Card  className='card'>
      <ListGroup variant="flush">
        <ListGroup.Item style={{color:'rgb(65, 62, 62)'}}>
            <h3 className='title'>WHO WE ARE</h3>There's nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life. 
            Around here, we don't settle for anything less than food we're proud to serve. And we don't just clock in. Not when we can also become our best, make friends, 
            and have fun while we're at it. We're the pizza company that lives life unboxed. We're not for people who want to blend in: pushing boundaries is part of our heritage. 
            We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. Whether it's the original Stuffed Crust or putting a pizza in outer space, 
            we never stop driving ourselves to deliver hot pizzas, fast every time - anywhere you want to enjoy it.
        </ListGroup.Item>
        <br/>
        <ListGroup.Item style={{color:'rgb(65, 62, 62)'}}>
            <h3 className='title'>WHAT WE'RE ABOUT</h3>
            At Pizza Hut, we don't just make pizza. We make people happy. Pizza Hut was built on the belief that pizza night should be special, and we carry that belief into everything we do.
            With more than 55 years of experience under our belts, we understand how to best serve our customers through tried and true service principles: We create food we're proud to serve and deliver it fast, with a smile.
        </ListGroup.Item>
        <br/>
        <ListGroup.Item style={{color:'rgb(65, 62, 62)'}}>
            <h3 className='title'>WHERE WE COME FROM</h3>
            In 1958, two brothers borrowed $600 from their mom to open a pizza place in Wichita, Kansas. They named it Pizza Hut, because their sign only had room for eight letters. How profound! Soon, the restaurant grew. Why? The pizza was awesome. 
            The service felt like home. And the customers were treated like family. And we've been delivering that same food and service ever since.
        </ListGroup.Item>
        <br/>
        <ListGroup.Item style={{color:'rgb(65, 62, 62)'}}>
            <h3 className='title'>PIZZA HUT INDIA</h3>
            In June 1996, Pizza Hut made its foray into India with a restaurant in Bangalore and was the first international restaurant chain to pioneer this category. The restaurant brand offers an exciting menu consisting of its signature pizzas, appetizers, pastas, desserts and beverages.
            Its trademark dining experience has been recognized by Brand Equity to make it the Most Trusted Food Service Brand for 11 years in a row. Pizza Hut is the most preferred pizza brand in India, given its freshest, tastiest and affordable Pizzas.
        </ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    </div>
    )
  }
}
