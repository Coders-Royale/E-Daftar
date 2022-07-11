import React, { Fragment, useEffect } from 'react';

import './Homepage.css';

import Homepage_1 from '../images/homepage_1.png';
import Homepage_2 from '../images/homepage_2.svg';
import SliderLeft from '../images/homepage_slider_left.png';
import SliderRight from '../images/homepage_slider_right.png';
import DM1 from '../images/homepage_dm_1.png';
import DM2 from '../images/homepage_dm_2.png';
import DM3 from '../images/homepage_dm_3.png';
import DM4 from '../images/homepage_dm_4.png';
import MacbookPro from '../images/homepage_macbookpro.png';
import Speed from '../images/homepage_speed.png';

const Homepage: React.FC = () => {

	useEffect(() => {
		require('./Slider.js');
	}, []);

    return (
        <Fragment>
        	<div className='grid grid-cols-5 mx-12 mt-8 items-center'>
        		<div className='col-span-2'>
        			<h1 className='text-7xl font-bold'>
        				A digital way of managing documents
        			</h1>
        			<p className='mt-8'>
        				Get things done faster with a new Document Manager. Inbuilt file tracker for transparency. Do more with email templates and a fresh UI.
        			</p>
					<button className='mt-4 bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-2 px-6 rounded-md'>
						Create an account
					</button>
        		</div>
				<div className='col-span-3'>
					<img src={Homepage_1} alt='homepage' className='mx-auto w-3/4' />
				</div>
        	</div>

        	<div className='mx-12 mt-24'>
        		<div className='grid grid-cols-5 gap-12 text-center mx-36 -mb-6'>
        			<div className='col-span-1 p-2 content-center rounded-md border-2 border-[#2d5063] bg-[#2d5063] text-white'>
        				Primary
        			</div>
        			<div className='col-span-1 p-2 content-center rounded-md border-2 border-[#2d5063] bg-white'>
        				Sent
        			</div>
        			<div className='col-span-1 p-2 content-center rounded-md border-2 border-[#2d5063] bg-white'>
        				Approved
        			</div>
        			<div className='col-span-1 p-2 content-center rounded-md border-2 border-[#2d5063] bg-white'>
        				Rejected
        			</div>
        			<div className='col-span-1 p-2 content-center rounded-md border-2 border-[#2d5063] bg-white'>
        				Pending
        			</div>
        		</div>

        		<div className='rounded-xl mx-24 border-2 border-[#2d5063]'>
        			<div className='flex flex-row justify-between mr-24'>
        				<p className='pt-24 pb-20 px-20 text-xl font'>Keep the list of all the mail you recieved from the office.</p>
        				<img src={Homepage_2} alt='homepage-2' />
        			</div>
        		</div>
        	</div>

        	<div className='mx-0 lg:mx-12 mt-24'>
        		<div className='container mx-auto'>
        			<div className='left'>
        				<img className='slider-img' src={SliderLeft} alt='slider-left' />
        			</div>
        			<div className='right'>
        				<img className='slider-img' src={SliderRight} alt='slider-right' />
        			</div>
        			<div className='slider'></div>
        		</div>
        	</div>

        	<div className='mx-12 mt-24'>
        		<h1 className='text-center text-4xl'>Why Document Manager ?</h1>
        		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16'>

        			<div className='text-center md:border-r-2 border-gray-300 mt-16 lg:mt-0'>
        				<div className=''>
        					<div className='bg-[#2d5063] w-28 h-28 mx-auto rounded-full'>
		        				<img src={DM1} alt='dm-1' className='mx-auto py-6' />
		        			</div>
        				</div>
	        			
	        			<h1 className='mt-8 text-blue-500 text-3xl'>10,000</h1>
	        			<h1 className='text-3xl'>Papers</h1>

	        			<p className='mt-2 mx-8'>
	        				Roughly 70% of office waste is paper waste. In total an average office worker uses 10000 pages per year.
	        			</p>
        			</div>

        			<div className='text-center lg:border-r-2 border-gray-300 mt-16 lg:mt-0'>
        				<div className=''>
        					<div className='bg-[#2d5063] w-28 h-28 mx-auto rounded-full'>
		        				<img src={DM2} alt='dm-2' className='mx-auto py-6' />
		        			</div>
        				</div>
	        			
	        			<h1 className='mt-8 text-blue-500 text-3xl'>Unlimited</h1>
	        			<h1 className='text-3xl'>Storage</h1>

	        			<p className='mt-2 mx-8'>
	        				Feel free to share even large files with unlimited storage. Never stop yourself because of space to store.
	        			</p>
        			</div>

        			<div className='text-center md:border-r-2 border-gray-300 mt-16 lg:mt-0'>
        				<div className=''>
        					<div className='bg-[#2d5063] w-28 h-28 mx-auto rounded-full'>
		        				<img src={DM3} alt='dm-3' className='mx-auto py-6' />
		        			</div>
        				</div>
	        			
	        			<h1 className='mt-8 text-blue-500 text-3xl'>5-10</h1>
	        			<h1 className='text-3xl'>Days</h1>

	        			<p className='mt-2 mx-8'>	        				
							Fastest speed to sign digitally a document using Technology, Machine learning and a lot of research on office problems.
	        			</p>
        			</div>

        			<div className='text-center mt-16 lg:mt-0'>
        				<div className=''>
        					<div className='bg-[#2d5063] w-28 h-28 mx-auto rounded-full'>
		        				<img src={DM4} alt='dm-4' className='mx-auto py-6' />
		        			</div>
        				</div>
	        			
	        			<h1 className='mt-8 text-blue-500 text-3xl'>528</h1>
	        			<h1 className='text-3xl'>Hours</h1>

	        			<p className='mt-2 mx-8'>
	        				A study by Xerox found that businesses can save 528 hours per employee per year  by digitizing things.
	        			</p>
        			</div>

        		</div>
        	</div>

        	<div className='bg-[#2d5063] min-h-screen mt-24'>
        		<div className='lg:grid lg:grid-cols-5 ml-24 items-center'>
        			<h1 className='text-white text-6xl lg:text-7xl xl:text-8xl font-bold'>
        				One place for all your work.
        			</h1>
        			<img src={MacbookPro} alt='macbook-pro' className='w-[2/3] col-span-4' />
        		</div>
        	</div>

        	<div className='mt-24 mx-12'>
        		<img src={Speed} alt='speed' className='mx-auto w-2/3' />
        		<h1 className='text-5xl text-center mt-8'>
        			Experience The Speed
        		</h1>
        		<h1 className='text-2xl text-center mt-4'>
        			Paperless. Fast. Smooth.
        		</h1>
        		<h1 className='text-base text-center mt-4 text-gray-500'>
        			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim nulla ultrices praesent sed nisl velit est eget.
        		</h1>
        	</div>

        	<div className='bg-[#2d5063] h-48 mt-24'>
        		<div className='absolute inset-x-0 -mt-16  mx-auto w-3/4 bg-gradient-to-r from-[#d9d9d9] to-[#f2f3f5] flex flex-row justify-around p-12 rounded-2xl'>
        			<h1 className='text-4xl ml-8'>Wanna Have A Discussion ?</h1>
        			<button className=' bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 rounded-md'>
						Chat With Us
					</button>
        		</div>
        	</div>

        </Fragment>
    );
};

export default Homepage;