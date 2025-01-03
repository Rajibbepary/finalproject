import { FaClock, FaPhone,  } from "react-icons/fa";
import Cover from "../../Shared/Cover";
import contact from '../../assets/contact/banner.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaMapLocation } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
       <>
        <Helmet>
                            <title>Bistro Boss | Contact</title>
                                </Helmet>
       <Cover img={contact} title={'CONTACT US'} />
       <SectionTitle subHeading={'Vist Us'} heading={'our location'}></SectionTitle>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-9/12 mx-auto mb-10">
            <div className="border-2 p-3">
                <div className="bg-[hsla(36,57%,57%,1)] w-full py-6 flex  justify-center items-center ">
                    <FaPhone className="text-white text-center text-2xl"></FaPhone>
                </div>
                <div className="text-center p-8 bg-[hsla(0,0%,95%,1)]">
                    <h2 className="text-xl font-semibold">PHONE</h2>
                    <p>+088 43389000</p>
                </div>
            </div>
            <div className="border-2 p-3">
                <div className="bg-[hsla(36,57%,57%,1)] w-full py-6 flex  justify-center items-center ">
                    <FaMapLocation className="text-white text-center text-2xl"/>
                </div>
                <div className="text-center p-8 bg-[hsla(0,0%,95%,1)]">
                <h2 className="text-xl font-semibold">ADDERSS</h2>
                    <p>Dhaka Bangladesh</p>
                </div>
            </div>
            <div className="border-2 p-3">
                <div className="bg-[hsla(36,57%,57%,1)] w-full py-6 flex  justify-center items-center ">
                    <FaClock className="text-white text-center text-2xl"/>
                </div>
                <div className="text-center p-8 bg-[hsla(0,0%,95%,1)]">
                <h2 className="text-xl font-semibold">Working Hours</h2>
               <p> Mon - Fri: 08:00 - 22:00</p>
               <p> Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
       </div>
       <SectionTitle subHeading={'Send Us a Message'} heading={'contact form'}></SectionTitle>

       <div className="w-8/12 mx-auto mb-10 bg-[hsla(0,0%,95%,1)] px-14 py-8 rounded-md">
         <form>                 

                        <div className="lg:flex gap-2">
                        <div className="mt-4 w-1/2 ">
                                
                                <label
                              className='block mb-2 text-sm font-medium text-gray-600 '
                              htmlFor='LoggingEmailAddress'
                            >
                                Name*
                            </label>
                            <input
                              id='LoggingEmailAddress'
                              autoComplete='email'
                              name='email'
                              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                              type='text'
                            />
                            </div>
                            <div className="mt-4  w-1/2">
                                <label
                              className='block mb-2 text-sm font-medium text-gray-600 '
                              htmlFor='LoggingEmailAddress'
                            >
                              Email* 
                            </label>
                            <input
                              id='LoggingEmailAddress'
                              autoComplete='email'
                              name='email'
                              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                              type='email'
                            />
                               
                            </div>
                        </div>
                          <div className='mt-4'>
                            <label
                              className='block mb-2 text-sm font-medium text-gray-600 '
                              htmlFor='LoggingEmailAddress'
                            >
                              Phone* 
                            </label>
                            <input
                              id='LoggingEmailAddress'
                              autoComplete='email'
                              name='text'
                              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                              type='text'
                            />
                          </div>
              
                          <div className='mt-4 '>
                            <div>
                              <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='loggingPassword'
                              >
                                Message*
                              </label>
                            </div>
              
                           <textarea rows={'6'}   className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'>

                           </textarea>
                          </div>
                         
              
                              
                            {/* react simple captha end */}
                          <div className='mt-6  flex justify-center items-center'>
                            <button
                              type='submit'
                              className="btn block w-1/3 btn-outline border-0 border-b-4 rounded-md bg-[hsla(36,57%,33%,1)] "
                            //   className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                              Send Message
                            </button>
                          </div>
                  </form>
       </div>
       </>
    );
};

export default Contact;