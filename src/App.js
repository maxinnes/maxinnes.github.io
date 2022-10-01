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
              <a rel="noreferrer" href="https://bitwarden.jimapps.tools" target="_blank">Bitwarden</a>
            </ListGroup.Item>
            <ListGroup.Item style={{textAlign:"center"}}>
              More Soon
            </ListGroup.Item>
          </ListGroup>
        </Col>

      </Row>
    </Container>
  );
}
