import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">

        <Col xs={5}>
          <ListGroup variant='flush'>
            <ListGroup.Item style={{textAlign:"center"}}>
              <a rel="noreferrer" href="https://drive.google.com/file/d/1-thgsx1htkwvYTruqaU5ACZj72fN-yYk/view">Demo</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>

      </Row>
    </Container>
  );
}
