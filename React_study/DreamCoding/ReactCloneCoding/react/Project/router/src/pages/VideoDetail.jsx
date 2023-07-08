import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
    const {videoId} = useParams(); //객체 안에 Key value
    return <div>VideoDetail {videoId}</div>
}

