import React from 'react'
import './Livebetgame.css'

const Livebetgames = () => {
  return (
  <>
  {
    [1,2,3,4,5].map((item,i)=>(
        <>
        <div className='d-flex justify-content-between text-white col-11 ms-5 mt-3'>
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
                 <p className='mt-3 ms-5 ' style={{color:"#B3B3B3"}}>62:36</p>
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
                  <div className="mt-1 gap">
                  <div className='  bor odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <b className='text-success'>1.22</b>
                    </div>
                    <div className='  bor odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <b className='text-success'>1.22</b>
                    </div>
                    <div className='  bor odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <b className='text-success'>1.22</b>
                    </div>
                  </div>
                  <div className="mt-1">
                  <div className='  bor odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <b className='text-success'>1.22</b>
                    </div>
                    <div className='  bor odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <b className='text-success'>1.22</b>
                    </div>
                    <div className='  bor odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <b className='text-success'>1.22</b>
                    </div>
                  </div>
                  <div className="mt-3">
                  <div className='  bor odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <b className='text-success'>1.22</b>
                    </div>
                    <div className='  bor odd d-flex justify-content-between'>
                        <p>Faith Karagumrak </p>
                        <b className='text-success'>1.22</b>
                    </div>
                    </div>
                    
                    <div>
                        <div className='mt-3 box lh-1'>
                            <span className='ms-2'>+</span><br />
                            <span className='ms-2'>24</span>
                        </div>
                        <div className="box mt-2">
                        <i class="fa-solid fa-chart-simple ms-2 mt-2"></i>
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