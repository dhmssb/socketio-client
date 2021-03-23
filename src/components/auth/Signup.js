import React from 'react'

const Signup = () => {
    return (
     
 <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input id="name" type="text" className="validate" />
        <label htmlFor="name">Name</label>
      </div>
    </div>

    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate" />
        <label htmlFor="email">Email</label>
      </div>
    </div>

    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" className="validate" />
        <label htmlFor="password">Password</label>
      </div>
    </div>
    <button className='btn'>Sign up</button>
  </form>
</div>


    )
}

export default Signup
