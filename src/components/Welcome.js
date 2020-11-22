import React from 'react'
import { Typography } from 'antd';


function Welcome() {
    const { Title } = Typography;

    return (
        <div>
            <Title>Welcome To LyrAssist</Title>
            <img src="" alt="lyrAssist Logo" />
            <Title>  LyrAssist is an application designed to help you along your lyric writing journey. With the help of the assistant you will be
            able to find a plethora of words and phrases that will help you break through that writers block that has been holding you
            back. You will effortlessly create, edit, and manage Lyric Cards as you write. If something feels out of place just drag and drop
            the cards to and fro until it fits the order you like best. So again, welcome to LyrAssist! Click the 'Start Writing' button to begin
            your journey to writing the lyrics you have always wanted.</Title>
        </div>
    )

}

export default Welcome;