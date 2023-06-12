import { Col, Row, Container } from 'react-bootstrap';
import css from '../App.css';
import { useState, useEffect } from 'react';
export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2023-06-10&to=2023-06-10&sortBy=popularity&apiKey=a20645b273a2456894594602505a87db')
      .then(res => res.json())
      .then(json => {
        setData(json.articles);
      })
  }, [])

  return (
    <Container className='mt-5'>
      <Row >
       
        <h2 className='mb-3'>Home <span className='text-danger'>Page</span></h2>

        {data.map((data) => (
          <Col className='col-xl-4 col-6 my-2'>
            <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' style={{ height:'23rem' }} >
              <div className='card-img '>
                <img
                  className="d-block w-100 rounded-4"
                  src={data.urlToImage}
                />
              </div>
              <span className='fw-bold p-3 text-danger' style={{ textAlign: 'justify', fontSize: '12px' }}>{data.source.name}</span>
              <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{data.title}</h6>
              <a href={data.url} className='p-3'> Haberin Devamı..</a>
            </div>
          </Col>
     ))}



      </Row>
    </Container>

  );
}
