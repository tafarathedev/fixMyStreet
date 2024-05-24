import {useState} from 'react';
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import Navbar from '../components/Navbar';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
 //stat management
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [agree, setAgree] = useState(false);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState("");
 //const [showPassword, setShowPassword] = useState(false);
  
const signIn = useSignIn();//from react auth kiy library
const navigate = useNavigate() //react router dom
      const handleSignInWithEmail= async(e)=>{
         
        e.preventDefault();
          if(email && password){
              setEmail(email)
              setPassword(password)
              console.log("logged in")   
          }
         
          
         
         try {
           setLoading(true);//set laoding to run before and while loading
                    // Make the axios call using async/await syntax
                    const res = await axios.post("/login", { email, password , agree });
                   const token = res.data.token
                   const user_id = res.data.user._id
                   const status = res.status
                   const user_name = `${res.data.firstName}  ${res.data.lastName} `
                    // If the response data exists and signIn is successful, navigate to the homepage and reload the page
                 //check if success state is 200 OK code 
                  if(status === 200){
                    signIn({
                      auth: { token:token, type:"Bearer"},
                      userState: {name:user_name , uid: user_id}
                    })
                    setTimeout(() => {
                      toast.success(error, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 1,
                        theme: "dark",
                        transition: Slide,
                        });
                    }, 3000);
                    navigate("/");
                    window.location.reload();
                  }else{
                    navigate("/login");
                   
                  }
                 
               
        } catch (error) {
              // If there's an error, set the error state and log the error message
              setError(error.message);
              console.log(error);
        }
    
        setLoading(false);
      }











    return (
       <>
       <Navbar/>
       <div className='h-[89vh] flex justify-center items-center bg-[#f2f2f2]'>
        
        <div
       className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
       <div className="w-full">
           <div className="text-center">
               <h1 className="text-3xl font-semibold  text-gray-900">Sign in</h1>
               <p className="mt-2 text-gray-500">Sign in below to access your account</p>
           </div>
           <div className="mt-5">
               <form action="">
                   {/* email div section */}
               <div className="relative mt-6 flex flex-col">
               
                   <label htmlFor="email" className='text-black font-bold text-lg'>Email :</label>
                    <input
                        onChange={event => setEmail(event.target.value)}
                     type="email" name="email" placeholder='eg: someone@gmail.com' id="" className="p-3 rounded-sm bg-[#ccc] text-black " autoComplete='false' aria-autocomplete='off'/>
                   </div>

                   {/* password section */}
                   <div className="relative mt-6 flex flex-col">
               
               <label htmlFor="Password"
              
                className='text-black font-bold text-lg'>Password :</label>
                <input
                  onChange={event => setPassword(event.target.value)}
                type="password" name="password" placeholder='eg: 1234...' id="" className="p-3 rounded-sm bg-[#ccc] text-black " autoComplete='off' />
               </div>
             {/*   <div className='my-4'>
                    <input
                   
                     type="button" className='btn-link text-yellow-500    text-md font-medium' value={'Login with Google'} />
               </div>
                    */}
                    <div className='my-6'>
                      <h1 className='text-red-700'>{error}</h1>
                    </div>
                   <div className="my-6">
                       <button type="button"  onClick={handleSignInWithEmail} className=" w-full rounded-md bg-primary  px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">{loading? "Loading" : 'Sign In'}</button>
                       <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        limit={1}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition:Slide/><ToastContainer/>
                   </div>
                   <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                       <a href="#!"
                           className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                           up
                       </a>.
                   </p>
               </form>
           </div>
       </div>
   </div>
      </div>
       </>
    );
}

export default Login;
