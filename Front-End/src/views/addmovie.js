import React from "react";
import Header from "../components/header";

const Addmovie = () => {
	return (
		<div>
            <Header></Header>
    <div className="addmovie">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="upload-content">
						<form action="#" className="sign__form upload_form" id="movieform">
							<div  className="sign__logo">
								<img src="img/احجزلي.png" alt=""/>
							</div>
							<div className="sign__group">
                                <p className="title" >Title</p>
								<input type="text" className="sign__input upload" placeholder="" id="title" name="movieTitle"/>
							</div>
                            <div className="sign__group">
                                <p className="title" >Date</p>
                                <input type="date" id="moviedate" className="sign__input upload" name="movieDate"/>
							</div>
                            <div className="sign__group">
                            <p className="title" >Start Time</p> 
                            <input type="time" className="sign__input upload" id="movie_start_time" name="appt"/>
                            </div>
                            <div className="sign__group">
                            <p className="title" >End Time</p> 
                            <input type="time"  className="sign__input upload"id="movie_end_time" name="appt"/>
                            </div>
                            <div className="sign__group">
                                <p className="title" >Screening Room</p>
                                <select className= "sign__input upload" name="rooms" id="screenroom">
                                <option style={{color:"#000"}} value="room1">A</option>
                                <option style={{color:"#000"}} value="room2">B</option>
                                 </select>
							</div>
                            <div className="sign__group">
                            <p className="title"> Ticket Price</p>
                            <input type="number" id="ticketprice" className= "sign__input upload"  name="price" min="40" max="100"/>
                            </div>
                            <div className="sign__group">
                                <p className="title" >Image Url</p>
								<input type="text" className="sign__input upload" placeholder="" id="imgUrl" name="movieImgUrl"/>
							</div>		
                            <div className="sign__group">
                                <p className="title" >Trailer Url</p>
								<input type="text" className="sign__input upload" placeholder="" id="trailerUrl" name="movieTrailerUrl"/>
							</div>						
                            <button className="sign__btn" type="button" name="submit" onClick={trial}>Add Movie</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
    
	);
    
};
function trial() {
    var empt = document.forms["movieform"]["title"].value;

    if (empt === "") {
       alert("Please input a Value");
       return false;
    } else {
       console.log(document.getElementById("title").value);

    }
  }
export default Addmovie;
