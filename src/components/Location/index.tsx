import { MapPin } from "@phosphor-icons/react";
import { LocationButtonContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function LocationButton(){
    const [location, setLocation] = useState("Add your location");
    const [cookies, setCookie] = useCookies(["location"]);

    
    const locationError = useCallback(() => {
        console.log("Unable to retrieve your location");
    }, []);

    const locationSuccess = useCallback((position : GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`).then(
            async response => {
                const json = await response.json();
                const city = json['address']['city'];
                const stateCode = String(json['address']['ISO3166-2-lvl4']);
                const state = stateCode.substring(stateCode.indexOf('-')+1);
                const locationString = `${city} - ${state}`;
                setLocation(locationString);
                const date = new Date();
                date.setDate(date.getDate() + 1);
                setCookie("location", locationString, { path: "/", expires: date });
            }
        ).catch((error) => {
            console.log(error);
            locationError();
        })
    }, [locationError, setCookie]);
    
    const storedLocation = cookies.location;
   
    useEffect(()=>{
        if(!storedLocation){
            navigator.geolocation.getCurrentPosition(
                locationSuccess,
                locationError
            );
        }
        
    }, [locationSuccess, locationError, storedLocation]);

    function handleAddLocation(){
        if(!storedLocation){
            navigator.geolocation.getCurrentPosition(
                locationSuccess,
                locationError
            );
        }
    }


    return (
        <LocationButtonContainer onClick={handleAddLocation}>
            <MapPin className="locationIcon" weight="fill" size={21} />
            <label>{storedLocation !== null && storedLocation !== undefined ? storedLocation : location}</label>
        </LocationButtonContainer>
    );
}