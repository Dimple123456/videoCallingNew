import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom';

const VideoRoom = () => {

    let {roomId} = useParams()

    const myMeeting = async(element) => {
      const appID = 45917680;
      const serverSecret = "4f07285b175e9a2f83b1014bfd12f215";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Date.now().toString(), "Dimple");
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url:`http://localhost:5173/room/${roomId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }

  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom
