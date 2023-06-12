
import CommunicationImg from './img/CommunicationImg.jpg';
export default function Communication() {




  return (

    <div className="Communication">


      <div className="container">
        <div className="row my-5">
          <div className="col-xl-5">
            <div className="">
              <h2>Communication</h2>

              <div class="mb-3">
                <label  class="form-label">Your name and surname</label>
                <div className=" d-flex">
                  <input type="text" class="form-control"  placeholder="Oliver	 " />
                  <input type="text" class="form-control"  placeholder="Jake " />
                </div>
              </div>
              <div class="mb-3">
                <label  class="form-label">Email address</label>
                <input type="email" class="form-control"  placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label class="form-label">Tarih Giriniz</label>
                <input type="date" class="form-control"  />
              </div>
              <div class="mb-3">
                <label  class="form-label">Subject of communication</label>
                <textarea class="form-control"  rows="3"></textarea>
              </div>

              <button type="button" class="btn btn-outline-danger px-5 d-block mx-auto">Send</button>

            </div>
          </div>
          <div className="col-xl-7">
            <img src={CommunicationImg} className="App-logo img-fluid" alt="" />
          </div>

        </div>
      </div>




    </div>


  );
}
