import Image from 'next/image'
import SectionHeading from './SectionHading'
import eventData from '@/constant/event.constant'
import Link from 'next/link'
import { IoLocationSharp, IoStorefront, IoTicketOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { IoMdTrendingUp } from 'react-icons/io'
import relatedEventData from '@/constant/relatedEvent.constant'

const About = ({ event }) => {
  const eventDate = new Date(event?.event_end).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const options = { hour: 'numeric', minute: 'numeric', hour12: true }

  // Convert and format the start time
  const formattedStartTime = new Date(event?.event_start).toLocaleTimeString(
    'en-US',
    options
  )

  // Convert and format the end time
  const formattedEndTime = new Date(event?.event_end).toLocaleTimeString(
    'en-US',
    options
  )

  return (
    <section className='mt-12 mx-auto max-w-[1280px]'>
      <div className='max-w-4xl mx-5 xl:mx-0'>
        {/* Event */}
        <div className='flex flex-col md:flex-row  gap-8  md:gap-28  items-start'>
          <div className='w-full md:w-6/12'>
            <h2 className='text-xs font-light text-white'>Organization</h2>
            <h1 className='mt-1 text-2xl md:text-3xl font-semibold font-phudu'>
              {event?._organization?.name}
            </h1>
          </div>
          <div className='w-full md:w-6/12'>
            <h2 className='text-xs font-light text-white'>Type</h2>
            <h1 className='mt-1 text-2xl md:text-3xl font-semibold font-phudu'>
              {event?.type}
            </h1>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className='max-w-4xl mt-10 mx-5 xl:mx-0 '>
        {/* Event */}
        <div className='flex flex-col md:flex-row gap-7 md:gap-28  items-start'>
          <div className='w-full md:w-6/12'>
            <h2 className='text-xs font-light text-white'>Location</h2>
            <h1 className='mt-1 text-2xl md:text-3xl font-semibold font-phudu'>
              {event?.venue?.formatted_address}
            </h1>
          </div>
          <div className='w-full md:w-6/12'>
            <h2 className='text-xs font-light text-white'>Date / Time</h2>
            <h1 className='mt-1 text-2xl md:text-3xl font-semibold font-phudu'>
              {eventDate}
            </h1>
            <h1 className='mt-1 text-2xl md:text-3xl font-semibold font-phudu'>
              {`${formattedStartTime} - ${formattedEndTime}`}
            </h1>
          </div>
        </div>
      </div>
      {/* About */}
      <div className='max-w-4xl mx-5 xl:mx-0 mt-14 border-y border-white/40 pt-8 pb-12  '>
        {/* Event */}
        <div className='flex flex-col md:flex-row  gap-7 md:gap-28 items-start'>
          <div className='w-full md:w-6/12'>
            <SectionHeading title={'About'} />
            <h1 className='mt-5 text-white/65 leading-loose text-sm  '>
              {event?.description}
            </h1>
          </div>
          <div className='w-full md:w-6/12'>
            <SectionHeading title={'Event Information'} />
            <div className='mt-4'>
              <div className='flex flex-row gap-5 text-white/65 font-normal text-base'>
                <div className=''>
                  <Image
                    width={22}
                    height={22}
                    src='/assets/icons/information-circle-outline.png'
                    alt='circle icon for information'
                  />
                </div>
                <div className=''>
                  {event?.age_limit && (
                    <p className=''>This is a {event.age_limit}+ event</p>
                  )}
                  <p className='mt-2'>Presented by {event?.presented_by}</p>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <div className='flex flex-row gap-5 text-white/65 font-normal text-base'>
                <div className=''>
                  <Image
                    width={22}
                    height={22}
                    src='/assets/icons/cash.png'
                    alt='icon for cash'
                  />
                </div>
                <p className=''>You can get a refund if:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Event */}
      <div className='max-w-4xl mt-10 border-b border-white/40  pb-12  mx-5 xl:mx-0 mb-10 '>
        <SectionHeading title={'Lineup'} />
        <div className='mt-7 flex md:flex-row gap-4'>
          {/* item 1 */}
          {eventData?.artists?.map((artist) => (
            <div key={artist._id} className='flex flex-row gap-4 items-center'>
              <div className=''>
                <div className='rounded-xl'>
                  <Image
                    src={artist?.photo}
                    width={68.55}
                    height={64}
                    alt='image for event'
                  />
                </div>
                <p className='mt-1 text-xs font-bold text-white'>
                  {artist.name}
                </p>
              </div>
              <div className='w-[2px] hidden md:block rounded-md bg-white h-[58px]'></div>
            </div>
          ))}
        </div>
      </div>
      {/* Venue */}
      <div className='max-w-4xl mx-5 xl:mx-0 mt-10 border-b border-white/40  pb-12 mb-10  flex flex-col-reverse md:flex-row gap-7 md:gap-28 '>
        <div className='w-full md:w-6/12 text-center md:text-left'>
          <SectionHeading title={'Venue'} />
          <p className='text-white/65 text-lg font-normal mt-5'>
            Brooklyn Mirage
          </p>
          <p className='text-white/65 text-sm font-norma mt-3'>
            140 Stewart Ave Brooklyn, NY 11237
          </p>
          <p className='text-white/65 text-sm font-norma mt-3'>
            https://www.avant-gardner.com
          </p>
          <Link
            href='#'
            className='bg-gray-300 rounded-full py-3 px-7 flex w-max mt-5 mx-auto md:mx-0 flex-row items-center gap-3'
          >
            <IoLocationSharp className='text-white/65' />
            OPEN IN MAPS
          </Link>
          <div className='flex flex-row items-center justify-center md:justify-start mt-5 gap-3'>
            <IoStorefront className='text-white/65' />
            <p className='text-sm font-normal text-white/65'>
              Doors open at 8:00 PM
            </p>
          </div>
        </div>
        <div className='w-full md:w-6/12 '>
          <div className=' w-max mx-auto items-center flex flex-col  h-full'>
            <div className='mb-3 '>
              <Image
                src='/assets/event/logo.png'
                width={146}
                alt={'event logo'}
                height={146}
              />
            </div>
            <Link
              href='#'
              className='py-3 px-5 w-max rounded-full bg-indigo text-white'
            >
              FOLLOW
            </Link>
          </div>
        </div>
      </div>
      {/* Sonick App */}

      <div className='max-w-full mt-10 border-b border-white/40  pb-12 mb-10  flex flex-col mx-5 xl:mx-0 md:flex-row gap-7 md:gap-28 '>
        <div className='w-full md:w-6/12'>
          <SectionHeading title={'Download the SONIK app'} />
          <div className='text-white/65 mt-5 flex flex-col gap-2  font-normal text-sm lg:text-base'>
            <div className='flex flex-row items-center gap-5'>
              <CiSearch />
              <p className=''>Find events in your city</p>
            </div>
            <div className='flex flex-row items-center gap-5 mt-2 md:mt-0'>
              <IoMdTrendingUp />
              <p className=''>Stay up to date, save and share events</p>
            </div>
            <div className='flex flex-row items-center gap-5 mt-2 md:mt-0'>
              <IoTicketOutline />
              <p className=''>Purchase, send and access all in one place</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-6/12'>
          <p className='text-white text-3xl md:text-5xl font-phudu font-semibold'>
            More shows <br /> based on your taste
          </p>
        </div>
      </div>
      {/* Related Event */}
      <div className='max-w-full mt-10 mx-5 xl:mx-0  pb-12 mb-10  '>
        <SectionHeading title={'Related Events'} />
        {/* container */}
        <div
          className='flex flex-col mx-5 md:mx-auto flex-wrap md:flex-row gap-3
         mt-5 md:mt-12'
        >
          {relatedEventData.map((event) => (
            <div key={event.id} className=''>
              <div className='py-8 px-5 md:py-12 md:px-8  rounded-xl bg-black/25'>
                <div className='w-[160px] h-[134px] mx-auto'>
                  <Image
                    width={160}
                    height={134}
                    src={event.img}
                    alt='event related image'
                    layout='responsive'
                  />
                </div>
              </div>
              <h4 className='md:mt-5 text-center md:text-left font-semibold text-lg text-white'>
                {event.name}
              </h4>
              <p className='mt-2 text-center md:text-left text-white/65'>
                {event.data}
              </p>
              <p className='text-black mt-1'>{event.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default About
