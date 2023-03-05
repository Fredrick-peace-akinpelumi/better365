import React from 'react'
import './Livebetgame.css'

const Livebetgames = () => {
  return (
  <>
  {
    [1,2,3,4,5].map((item,i)=>(
        <>
        <div className='d-flex justify-content-between text-white col-8 ms-5 mt-3'>
        <div>
            <p>Turkey Turkcell League (6)</p>
        </div>
        <div className='d-flex gap-5'>
            <p>Final Result</p>
            <p>Next Goal</p>
            <p>Match Goals</p>
        </div>
    </div>

        <div className="container-fluid ms-2">
            <div className="row">
                <div className=" bgg d-flex justify-content-between">
                 <div className="d-flex mt-4">
                 <p className='mt-3 ms-5 text-secondary'>62:36</p>
              <div className='ms-3'>
              <p className='mt-2'>Faith Karagumruk</p>
                <p>Sivasspor</p>
              </div>
                 </div>
                <div className='d-flex gap-3'>
                    <div className='mt-5 '>
                    <p>2</p>
                    <p>1</p>
                    </div>
                  <div className="mt-1">
                  <div className='border odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <p className='text-success'>1.22</p>
                    </div>
                    <div className='border odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <p className='text-success'>1.22</p>
                    </div>
                    <div className='border odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <p className='text-success'>1.22</p>
                    </div>
                  </div>
                  <div className="mt-1">
                  <div className='border odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <p className='text-success'>1.22</p>
                    </div>
                    <div className='border odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <p className='text-success'>1.22</p>
                    </div>
                    <div className='border odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <p className='text-success'>1.22</p>
                    </div>
                  </div>
                  <div className="mt-3">
                  <div className='border odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <p className='text-success'>1.22</p>
                    </div>
                    <div className='border odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <p className='text-success'>1.22</p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
        </>
    ))
  }
    
  </>
  )
}

export default Livebetgames