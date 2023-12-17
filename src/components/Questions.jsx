 import React from 'react'
 import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


 
 const Questions = () => {
   return (
        <div className='w-[60%] mx-auto'>
            <h2 className='text-6xl font-semibold text-center text-gray-900'>
                Frequently asked questions
            </h2>
            <p className='text-2xl text-gray-500 text-center my-5 font-medium'>
                Everything you need to know about the product and billing.  
            </p>
            <div className='my-10 w-[80%] mx-auto'>
                <Accordion defaultExpanded= {true} sx={{ boxShadow: 'none', '&:before': { display: 'none' }, '&:not(:last-child)': { borderBottom: 0 } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                        <p className='text-xl font-medium text-gray-800'>
                            Is there a free plan available?    
                        </p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className='text-gray-500 w-[90%] font-medium'>
                      Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, '&:not(:last-child)': { borderBottom: 0 } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                        <p className='text-xl font-medium text-gray-800'>
                        Can I change my plan later? 
                        </p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className='text-gray-500 w-[90%] font-medium'>
                      Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, '&:not(:last-child)': { borderBottom: 0 } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                        <p className='text-xl font-medium text-gray-800'>
                        What is your cancellation policy?   
                        </p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className='text-gray-500 w-[90%] font-medium'>
                      Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, '&:not(:last-child)': { borderBottom: 0 } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                        <p className='text-xl font-medium text-gray-800'>
                        What is your cancellation policy?  
                        </p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className='text-gray-500 w-[90%] font-medium'>
                      Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, '&:not(:last-child)': { borderBottom: 0 } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                        <p className='text-xl font-medium text-gray-800'>
                        How does billing work?   
                        </p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className='text-gray-500 w-[90%] font-medium'>
                      Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, '&:not(:last-child)': { borderBottom: 0 } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                        <p className='text-xl font-medium text-gray-800'>
                        How do I change my account email?    
                        </p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className='text-gray-500 w-[90%] font-medium'>
                      Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </div>
        </div>
   )
 }
 
export default Questions
