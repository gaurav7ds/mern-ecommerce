import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Image, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = (props) => {
    const[product,setProduct] = useState({});
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const res = await axios.get(`/api/products/${props.match.params.id}`);
            setProduct(res.data);
        }
        fetchProduct();
    },[])
    return (
        <>
            <Link className = "btn btn-light my-3" to = "/">See more products </Link>
            <Row>
                <Col md = {6}>
                    <Image src = {product.image} fluid />
                </Col>
                <Col md = {3}>
                    <ListGroup varient = 'flush'>
                        <ListGroup.Item>
                        <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating color = {'#f8e825'} value = {product.rating} text = {`${product.numReviews} review`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Col>
                <Col md = {3}>
                    <Card>
                        <ListGroup varient = 'flush'>
                            <ListGroup.Item>
                            <Row>
                                <Col>Price:
                                </Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Col>Status:
                                </Col>
                                <Col>{product.countInStock>0?'In Stock':'Out of stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Button  className = "btn-block" disabled = {product.countInStock===0}>Add To Cart</Button></ListGroup.Item>
                           
                        </ListGroup>
                       
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
