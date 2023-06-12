import { createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase/firebase.utils";
import googleLogo from './img/google.png'
const Register = () => {
  const loginGoogleUser = async () => {
    // Popup ile hesap seçimi
    const { user } = await signInWithGooglePopup();

  }
  return (
    <div className="container">
      <div className="row my-5">

        <div className="col-xl-6 my-5 ">

          <div className="form-text my-3">
            <h2 className="text-secondary fst-italic">Already have an account?</h2>
            <span className="text-secondary fst-italic">Sign in with your email and password</span>
          </div>

          <form >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label fst-italic">Email address</label>
              <input type="email" class="form-control rounded-0" />

            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fst-italic">Password</label>
              <input type="password" class="form-control rounded-0" />
            </div>


          </form>
          <div className="google-sigin my-5 d-flex  ">
            <button type="submit" class="btn btn-dark bg-black px-5 rounded-0 py-3 fst-italic">SIGN IN</button>
            <button onClick={loginGoogleUser} className='btn btn-primary px-3 rounded-0 ms-3 py-3 fst-italic'> SIGN IN WITH GOOGLE</button>

          </div>

        </div>
        <div className="col-xl-6 my-5 ">

        <div className="form-text my-3">
        


            <h2 className="text-secondary   fst-italic">Don't have an account</h2>
            <span className="text-secondary fst-italic">Sign up with your email and password</span>
          </div>

          <form >
            <div class="mb-3">
              <label class="form-label fst-italic">Display Name</label>
              <input type="text" class="form-control rounded-0" />

            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label fst-italic">Email address</label>
              <input type="email" class="form-control rounded-0" />

            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fst-italic">Password</label>
              <input type="password" class="form-control rounded-0" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fst-italic">Confirm Password</label>
              <input type="password" class="form-control rounded-0" />
            </div>


          </form>
          <div className="google-sigin my-5 d-flex  ">
            <button type="submit" class="btn btn-dark bg-black px-5 rounded-0 py-3 fst-italic">SIGN UP</button>


          </div>

        </div>



      </div>
    </div>
  );
}

export default Register;