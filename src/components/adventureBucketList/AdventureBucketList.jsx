import React, {useState, useContext, useEffect} from "react";
import AdventureCard from "../adventureCard/AdventureCard";
import "./adventureBucketList.css"
import AuthContext from "../../store/authContext";
import axios from "axios";

const AdventureBucketList = () =>{
    const authCtx = useContext(AuthContext)
    const [bucketList, setBucketList] = useState([])
    const [allAdventures, setAllAdventures] = useState([])

    const bucketListAdventures = allAdventures.filter((adventure)=> {
        return bucketList.includes(adventure.id)
    })

    const getAllAdventures = () => {
        axios
        .get('/api/getAllAdventures')
        .then((res) => {
            // console.log(res.data)
            setAllAdventures(res.data)
           
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getBucketListByUserId = () => {
        axios
        .post('api/getBucketListByUserId', {
            userId: authCtx.userId
        })
        .then((res)=> {
            // console.log(res.data)
            setBucketList(res.data.map((list) => list.adventureId))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const displayBucketList = bucketListAdventures.map((bucketListAdventure) => {
        return (
            <AdventureCard
                key={`bucket-list-adventure-${bucketListAdventure.id}`}
                adventure={bucketListAdventure}
            />
        )
    })

    useEffect(()=> {
        getBucketListByUserId()
        getAllAdventures()
    }, [])

    return(
        <div className="adventure-bucket-list">
            <div className="bucket-list-border"></div>
            <h2>Adventure Bucket List:</h2>
            <div className="bucket-list-cards">
                {displayBucketList}
            </div>
        </div>
    )
};

export default AdventureBucketList;