
const Footer = () => {
    const paragraph="Our vision is to provide convenience \n and help increase your sales business."
  return (
<footer className="bg-white mx-auto" >
   <div className="px-4 py-12 flex flex-col md:flex-row border-t-2 border-b-2 justify-around  ">    
    <div className=" pr-4">  
    <h3 className='text-3xl font-bold text-blue-600'> MORENT </h3>
    <p className="whitespace-pre-line text-slate-500 pb-6">{paragraph} </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    <div className="space-y-4 ">
    <h4 className="font-semibold text-xl">About</h4> 
    <ul className="space-y-2 text-slate-500">
        <li>How it Works</li>
        <li>Featured</li>
        <li>Partnership</li>
        <li>Business Relation</li>
    </ul>
    </div>

    <div className="space-y-4">
    <h4 className="font-semibold text-xl"> Community </h4>
    <ul className="space-y-2 text-slate-500">
        <li>Events</li>
        <li>Blog</li>
        <li>Podcast</li>
        <li>Invite a friend</li>
    </ul>
    </div>

    <div className="space-y-4">
    <h4 className="font-semibold text-xl"> Socials </h4>
    <ul className="space-y-2 text-slate-500">
        <li>Discord</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Facebook</li>
    </ul>
    </div>
    </div>
    </div>

    <div className="grid grid-cols-1 md:grid-flow-col justify-between mx-2  py-4 font-semibold text-sm"> 
    <div> &#169;2022 MORENT. All Rights Reserved</div> 
    <div className="flex justify-between space-x-6">
    <div>Privacy & Policy</div> 
    <div>Terms & Condition </div>
    </div>
    </div>
</footer>
  )
}

export default Footer