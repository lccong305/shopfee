import { useEffect, useState } from "react";
import axios from "axios";

export default function News() {
    const [duLieu, setDuLieu] = useState();
    useEffect(() => {
        axios
            .get(
                "https://api.rss2json.com/v1/api.json?rss_url=https://vnexpress.net/rss/thoi-su.rss"
            )
            .then((res) => {
                setDuLieu(res.data);
                console.log(res.data);
            });
    }, []);

    return (
        <div className="App">
            {duLieu &&
                duLieu.items &&
                duLieu.items.map((item, key) => {
                    return (
                        
                        <div className="rss_main">
                            <h1>Tin tức thời sự mới nhất</h1>
                        <div className="rss">
                           
                            <h3>Title: {item.title}</h3>
                            <p><b>Day:</b> {item.pubDate}</p>
                          <p><b>Link: </b><a href={item.link}> {item.title}</a></p> 
                            <img src={item.thumbnail} height="400" width="400" />
                            {/* <p>Description: {item.description} </p> */}
                        </div>
                        </div>
                        
                    );
                })}
        </div>
    );
}