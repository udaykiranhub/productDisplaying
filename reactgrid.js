import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Product 1', price: '$100', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$600', image: 'https://via.placeholder.com/150' },
];

const Grid = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Grid;
