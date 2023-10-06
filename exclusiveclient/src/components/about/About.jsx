import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function About() {
  return (
    <>
         <Header />

         <main>
            <section className='hero_section_our_story'>
                  <div className='our_story_container max-w-bodyWidth mx-auto mt-28'>
                       <div className='flex our_story_rows justify-between tablet:px-4 mobile:px-4 px-4 mobile:flex-wrap mobile:gap-y-4 tablet:items-end'>
                              <div className='our_story_cols w-[50%] mobile:w-[unset]'>
                                  <div className='our_story_title'>
                                     <h6 className='text-5xl font-primary font-bold leading-[64px] mobile:text-3xl mobile:leading-10'>Our Story</h6>
                                  </div>
                                  <div className='our_story_paragraph'>
                                     <p className='text-lg font-secondary leading-6 font-medium mt-10'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
                                     <p className='text-lg font-secondary leading-6 font-medium mt-6'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
                                  </div>
                              </div>

                              <div className='our_hero_image w-50%'>
                                    <img src='/src/assets/images/about.webp' className='w-[100%] h-[auto]' alt='about'/>
                              </div>
                       </div>
                  </div>
            </section>

            <section className='our_ratings'>
                   <div className='our_ratings_container max-w-bodyWidth mx-auto'>
                        <div className='rating_rows flex justify-between items-center max-w-[979px] mx-auto mobile:flex-col my-32 mobile:gap-y-8 tablet:px-4 tablet:gap-x-8'>
                            <div className='seller_active rounded-sm border-2 py-4 px-6 cursor-pointer hover:bg-[#DB4444] hover:text-white'>
                                 <img src='/src/assets/images/seller_active.png'alt='seller_active' className='w-[200px] h-[200px] object-contain mobile:w-[150px] mobile:h-[150px] mobile:object-contain'/>
                            </div>

                            <div className='customer_active border-2 py-4 px-6 cursor-pointer hover:bg-[#DB4444] hover:text-white '>
                                <img src='/src/assets/images/customer_active.png' className='w-[200px] h-[200px] object-contain mobile:w-[150px] mobile:h-[150px] mobile:object-contain'/>
                            </div>

                            <div className='annual_gross border-2 py-4 px-6 cursor-pointer hover:bg-[#DB4444] hover:text-white '>
                                 <img src='/src/assets/images/annual_gross.png' className='w-[200px] h-[200px] object-contain mobile:w-[150px] mobile:h-[150px] mobile:object-contain'/>
                            </div>
                        </div>
                   </div>
            </section>

            <section className='our_staff'>
                   <div className='our_staff_container max-w-bodyWidth mx-auto'>
                        <div className='our_staff_rows flex justify-between items-center max-w-[979px] mx-auto mobile:flex-col my-15 mobile:gap-y-8 tablet:px-4 tablet:gap-x-8 mobile:my-15'>
                            <div className='tom_cruise py-4 px-6'>
                                 <img src='/src/assets/images/tomcruise.png'alt='seller_active' className='w-[auto] h-[200px] object-contain mobile:w-[150px] mobile:h-[150px] mobile:object-contain'/>
                                 <p className='mt-6 font-primary text-3xl leading-8 font-medium'>Tom Cruise</p>
                                 <p className='font-primary text-base leading-5 font-normal mt-2'>Founder & Chairman</p>
                            </div>

                            <div className='emma_watson py-4 px-6 mobile:grid mobile:justify-items-center'>
                                <img src='/src/assets/images/emmawatson.png' className='w-[auto] h-[200px] object-contain mobile:w-[150px] mobile:h-[150px] mobile:object-contain'/>
                                <p className='mt-6 font-primary text-3xl leading-8 font-medium'>Emma Watson</p>
                                <p className='font-primary text-base leading-5 font-normal mt-2'>Managin Director</p>
                            </div>

                            <div className='will_smith py-4 px-6'>
                                 <img src='/src/assets/images/willsmith.png' className='w-[auto] h-[200px] object-contain mobile:w-[150px] mobile:h-[150px] mobile:object-contain'/>
                                 <p className='mt-6 font-primary text-3xl leading-8 font-medium'>Will Smith</p>
                                 <p className='font-primary text-base leading-5 font-normal mt-2'>Product Designer</p>
                            </div>
                        </div>
                   </div>
            </section>

            <section className='customer_service'>
                      <div className='customer_service_container max-w-bodyWidth my-20 mx-auto mobile:my-9'>
                            <div className='customer_row'>
                                    <div className='services_container max-w-[973px] mx-auto'>
                                        <div className='service_gallery flex justify-between items-center mobile:gap-4 mobile:px-4 tablet:px-4'>
                                             <img src='/src/assets/images/Services.png' className='w-auto h-auto mobile:!w-[150px] mobile:!h-[auto] mobile:!object-cover' alt='services'/>
                                             <img src='/src/assets/images/customerservice.png' className='w-auto h-auto mobile:!w-[150px] mobile:!h-[auto] mobile:!object-cover'  alt='customerservice'/>
                                             <img src='/src/assets/images/moneyback.png' className='w-auto h-auto mobile:!w-[150px] mobile:!h-[auto] mobile:!object-cover' alt='moneyback'/>
                                        </div>
                                    </div>
                            </div>
                      </div>
                </section>
         </main>
         <Footer />
    </>
  )
}

export default About