import { Col, Carousel, } from 'react-bootstrap';
import css from '../App.css';
import { useState, useEffect } from 'react';
export default function Sports() {


  const Slidersports = [
    {
      id: 1,
      title: 'Sergen Yalçına hoş geldin hediyesi Takımı şampiyon yapan futbolcu geri dönüyor',
      imageUrl: 'https://i.hbrcdn.com/manset/2023/06/04/fenerbahce-derbiye-siyah-pazubantla-cikacak_15994997_9767_z1.jpg',
    },
    {
      id: 2,
      title: 'Jorge Jesustan kendisine 2,yıl daha beraber çalışalım diyen Ali Koça bomba ',
      imageUrl:
        'https://i.hbrcdn.com/haber/2023/04/08/jorge-jesus-tan-2-yil-daha-beraber-calisalim-15750320_1336_m.jpg',
    },
    {
      id: 3,
      title: 'Old Firm " derbisinde gülen Celtic!',
      imageUrl:
        'https://static.bundle.app/news/folsf1aa.2fz.jpg',
    },


  ]

  const teamSuperLig = [
    {
      id: 1,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000161_120x120.png',

    },
    {
      id: 2,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000158_120x120.png',
    },
    {
      id: 3,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000122_120x120.png',
    },
    {
      id: 4,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000148_120x120.png',
    },
    {
      id: 5,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000187_120x120.png',
    },
    {
      id: 6,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000050_120x120.png',
    },
    {
      id: 7,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000073_120x120.png',
    },
    {
      id: 8,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000150_120x120.png',
    },
    {
      id: 9,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000051_120x120.png',
    },
    {
      id: 10,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000162_120x120.png',
    },
    {
      id: 11,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000251_120x120.png',

    },
    {
      id: 12,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000232_120x120.png',
    },
    {
      id: 13,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000175_120x120.png',
    },
    {
      id: 14,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000038_120x120.png',
    },
    {
      id: 15,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000240_120x120.png',
    },
    {
      id: 16,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000153_120x120.png',
    },
    {
      id: 17,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000154_120x120.png',
    },
    {
      id: 18,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000169_120x120.png',
    },
    {
      id: 19,
      imageUrl: 'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000071_120x120.png',
    },


  ]

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=a20645b273a2456894594602505a87db')
      .then(res => res.json())
      .then(json => {
        setData(json.articles);
      })
  }, [])



  return (

    <div >

      <div className="container mt-5  ">

        <div className="team">

          <div className="superLig bg-white p-3 ">
            {teamSuperLig.map((teamSuperLig) => (
              <div className="superLig-title">
                <a href=""><img src={teamSuperLig.imageUrl} className="mx-2" alt="" /></a>

              </div>
            ))}

          </div>

        </div>
        <div className="row mt-3 bg-white p-3">
          <div className="col-xl-8 col-12">
            <Carousel>
              {Slidersports.map((Slidersports) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100 object-fit-cover"
                    src={Slidersports.imageUrl}
                    alt="First slide"
                  />

                </Carousel.Item>
              ))}

            </Carousel>
          </div>
          <div className="col-xl-4 col-12">
            <div>

              <iframe className='pt' frameborder="0" width="350" height="410"
                src="https://www.trtspor.com.tr/puandurumu-ekle/?lig=1&renk=a&baslik=1&resimler=1&a=8"></iframe>
              <div>

              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">

          <h2 className='mb-3'>Sports <span className='text-danger'>Page</span></h2>

          {data.map((data) => (
            <Col className='col-xl-4 col-6 my-2'>
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' style={{ height: '23rem' }} >
                <div className='card-img '>
                  <img
                    className="d-block w-100 rounded-4"
                    src={data.urlToImage}
                  />
                </div>
                <span className='fw-bold p-3 text-danger' style={{ textAlign: 'justify', fontSize: '12px' }}>{data.source.name}</span>
                <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{data.title}</h6>
                <a href={data.url} className='p-3' target='_blank'> Haberin Devamı..</a>
              </div>
            </Col>






          ))}

        </div>
      </div>


    </div>
  );
}
