import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'


const page = () => {
  return (
    <>
    
    <section className=' card-cta'>

      <div className=' flex flex-col gap-6 max-w-lg'>

        <h2>Get Interview-Ready with AI-powered practice and feedback</h2>

        <p>Practice real interview questions and gett instant feedback</p>

        <Button asChild className='btn-primary max-sm:w-full'>

          <Link href="/interview"> Start and Interview</Link>
        </Button>
      </div>

      <Image src="/robot.png" alt="Robot" width={400} height={400} className=' max-sm:hidden'></Image>

    </section>

    <section className=' flex flex-col gap-6 mt-8'>

      {
        dummyInterviews.map( (interview)=>(

          <InterviewCard  {...interview} key={interview?.id}></InterviewCard>
        ) )
      }
    </section>
    
    </>
  )
}

export default page