import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="homeMain">
            <div className="overlayColor">
                <div className="homeInfo">
                    <span className="lineOne">You got the travel plans, we got the travel vans.</span>
                    <span className="lineTwo">
                        Add adventure to your life by joining the #vanlife movement.
                        <br/>
                        Rent the perfect van to make your perfect road trip.
                    </span>
                    <Link to="vans">Find your van</Link>
                </div>
            </div>
        </div>
    )
};