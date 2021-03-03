import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    
      <div>

        <Button>click on</Button>
        
        {/* use fluid if screen 100% width */}
        <Container>
            <Row>
              <Col className='border1'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor quod eveniet eius optio dicta ut rerum magnam voluptate sequi?</p>
              </Col>
              <Col className='border1'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor quod eveniet eius optio dicta ut rerum magnam voluptate sequi?</p>
              </Col>
              <Col className='border1'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor quod eveniet eius optio dicta ut rerum magnam voluptate sequi?</p>
              </Col>
            </Row>
        </Container>

      </div>
   
  );
}

export default App;
