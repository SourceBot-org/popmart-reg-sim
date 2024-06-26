import React from "react";
import "./Ads.css";

export default function Ads() {
    return (
        <div className="Ads">
            <h1>หากท่านชื่นชอบระบบฝึกซ้อมนี้ท่านสามารถสนับสนุนได้ 2 ทาง</h1>
            <h2>1. สนับสนุนตามศรัทธา นายวศิน ศิลากอง K-Bank 133-1-31668-3</h2>
            <h2>2. สั่งซื้อโปรแกรมจากทาง SourceBot</h2>
            <div className="ads-videos">
                <div className="ads-video">
                    <label>AutoFill โปรแกรมช่วยกรอกลงทะเบียน</label>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gbV4HcMKf8A?si=jP8rez7E0CIsAnxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="ads-video">
                    <label>FlashCart บอทกดของ Lazada</label>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/T9CHqmirEdM?si=QP39pjZjeYi5Q6Ts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    );
}