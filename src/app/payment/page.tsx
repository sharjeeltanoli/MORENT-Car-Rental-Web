import ButtonC from "../components/Button";

const Payment = () => {

  return (
    <div className="my-2 ">
<form className="text-slate-600 text-sm  border rounded-lg bg-white py-4 m-2">
<h3 className="mx-4 font-bold pt-4">Billing Info</h3>
<div className="mx-4 pb-4 text-[12px] flex justify-between"> 
  <p>Please Enter Your Billing info </p>
  <p>Step 1 of 4 </p>
  </div>
<div className=" mx-4 grid grid-cols-1 md:grid-cols-2 space-y-2">
<label htmlFor="name">
  <h3 className="font-semibold">Name</h3>
  <input type="text" placeholder="Your Name" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="Phone Number">
  <h3 className="font-semibold">  Phone Number</h3>
  <input type="number" placeholder="Phone Number" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="Address">
  <h3 className="font-semibold"> Address</h3>
  <input type="text" placeholder="Address" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="City">
  <h3 className="font-semibold">  Town/City</h3>
  <input type="text" placeholder="Town or City" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  </div>
</form>

<form className="text-slate-600 text-sm  border rounded-lg bg-white py-4 m-2">
<h3 className="mx-4 font-bold pt-4">Rental Info</h3>
<div className="mx-4 pb-4 text-[12px] flex justify-between"> 
  <p>Please select your rental date</p>
  <p>Step 2 of 4 </p>
  </div>
<div className="mx-4 py-2" ><input type="radio" name="Pickup" id="pickup"/> Pickup</div>
<div className=" mx-4 grid grid-cols-1 md:grid-cols-2 space-y-2">
<label htmlFor="pickup location">
  <h3 className="font-semibold">Location </h3>
  <input type="text" placeholder="Pickup Location" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="date">
  <h3 className="font-semibold">Date</h3>
  <input type="number" placeholder="Select your date" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="time">
  <h3 className="font-semibold"> Time</h3>
  <input type="text" placeholder="Select your Time" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  </div>
  <div className="mx-4 mt-4 py-2" ><input type="radio" name="Dropoff" id="dropoff"/> Dropoff</div>
<div className=" mx-4 grid grid-cols-1 md:grid-cols-2 space-y-2">
<label htmlFor="dropoff location">
  <h3 className="font-semibold">Location </h3>
  <input type="text" placeholder="Dropoff Location" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="date">
  <h3 className="font-semibold">Date</h3>
  <input type="number" placeholder="Select your date" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="time">
  <h3 className="font-semibold"> Time</h3>
  <input type="text" placeholder="Select your Time" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  </div>  
</form>

<form className="text-slate-600 text-sm  border rounded-lg bg-white py-4 m-2">
<h3 className="mx-4 font-bold pt-4">Payment Method</h3>
<div className="mx-4 pb-4 text-[12px] flex justify-between"> 
  <p>Please Enter Your payment method </p>
  <p>Step 3 of 4 </p>
  </div>
  <div className="mx-4 my-2 py-2 bg-slate-100 border rounded md" >
      <input type="radio" name="Dropoff" id="dropoff"/> Credit Card
<div className=" mx-4 grid grid-cols-1 md:grid-cols-2 space-y-2">
<label htmlFor="cardnumber">
  <h3 className="font-semibold">Card Number</h3>
  <input type="number" placeholder="Card Number" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="expiry">
  <h3 className="font-semibold"> Expiration Date</h3>
  <input type="number" placeholder="Expiration Date" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="Card Title">
  <h3 className="font-semibold"> Card Holder</h3>
  <input type="text" placeholder="Title" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  <label htmlFor="CVC">
  <h3 className="font-semibold">CVC </h3>
  <input type="number" placeholder="CVC" 
    className="border rounded-sm border-slate-300 py-1" />
  </label>
  </div>
  </div>

  <div className="mx-4 my-2 py-2 bg-slate-100 border rounded md" >
    <input type="radio" name="paypal" id="paypal"/> Paypal </div>
  
  <div className="mx-4 my-2 py-2 bg-slate-100 border rounded md" >
    <input type="radio" name="Bitcoin" id="btc"/> Bitcoin
  </div>
</form>

<form className="text-slate-600 text-sm  border rounded-lg bg-white py-4 m-2">
<h3 className="mx-4 font-bold pt-4">Confirmation</h3>
<div className="mx-4 pb-4 text-[12px] flex justify-between"> 
  <p>We are getting to the ends. Just few clicks and your rental is ready. </p>
  <p>Step 4 of 4 </p>
  </div>
 
  <div className="mx-4 my-2 py-2 bg-slate-100 border rounded md" >
    <input type="checkbox" name="aggrement" id="aggrement"/> I agree with with sending a Marketing and newletter emails. no spam, Promised! </div>
  
  <div className="mx-4 my-2 py-2 bg-slate-100 border rounded md" >
    <input type="checkbox" name="privacy policy" id="privacy policy"/> I agree with our Terms and Condition and Privacy.
  </div>
  <div className="mx-4 text-center py-2" >
  <ButtonC text="Rent Now" link={"/"}/>
  </div>



  
</form>






    </div>

  );
};

export default Payment