import React from 'react'
import './index.scss'
function Header() {
    return (
        <div id='header'>
            <div className="container">

                <h1>
                    We Rank the Best Courses
                    on the Web
                </h1>
                <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope.</p>

                <div className="inputd ">
                    <input type="text" />
                    <button >search</button>
                </div>
                <div className="top">
                    <p className='up'>Top courses</p>
                    <div className="bigbox">
                        <div className="box">ruby on raisl</div>
                        <div className="box">python</div>
                        <div className="box">marcting</div>
                        <div className="box">ui/ux desing</div>
                        <div className="box">anorid</div>
                        <div className="box">ascmksdasd</div>
                        <div className="box">ascmksdasd</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header