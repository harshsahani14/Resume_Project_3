import React from 'react'
import dayjs from 'dayjs';
import Image from 'next/image';

const InterviewCard = ( { interviewId,userId,role,type,techstack,createdAt }:InterviewCardProps ) => {
  

  const feedback = null as Feedback | null;
  const formatedDate = dayjs( feedback?.createdAt || createdAt || Date.now() ).format('MMM D, YYYY');
  //MMM is feb,jan and not february and january

  
    return (
    <div className=' card-border w-[360px] max-sm:w-full min-h-96 '>

      <div className=' card-interview'>

        <div>

          <div className=' absolute top-0 font-bold right-0 w-fit px-4 py-2 bg-light-600 rounded-bl-lg'>
            <p>{type}</p>
          </div>

          <Image src='/adobe.png' alt="Cover Image" width={92} height={92} className=' rounded-full '></Image>

          <h3 className=' mt-5 capitalize'>{role} Interview</h3>


          <div className=' flex flex-row gap-12 mt-3'>
            <div className=' flex gap-2 items-center'>

            <Image src='/calendar.svg' width={22} height={22} alt='' />

            <p>{formatedDate}</p>
            </div>

            <div className=' flex gap-2 items-center'>

              <Image src="/star.svg" width={22} height={22} alt="star"></Image>

              <p> {feedback?.totalScore || '---' }/100  </p>
            </div>

          </div>

          <p className='mt-5 line-clamp-2'>
            {feedback?.finalAssessment || "You haven't taken the interview yet.Take it now to improve your skills "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard