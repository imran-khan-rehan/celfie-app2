// import SidePanel from "../components/SidePanel";

import { useEffect } from "react";
import { useParams } from 'react-router-dom';
const scripts = [
  {
    id2: 1,
    mode: 'embed',
    isolate: 'true',
    themecolor: '#ec4036',
    header: 'off',
    id: 'webchat',
    accentcolor: '#080C19',
    textcolor: 'white',
    src: 'https://cdn.machaao.com/prod/web/js/embed.js',
    type: 'text/javascript',
    mkey: 'ZDhhY2RiNDAtYjE0OS0xMWVlLTk4OGEtYTU3YjI5Y2U0NWZk',
    style: 'min-height: 480px',
    chathost: 'https://messengerx.io',
    botname: 'mx-jarvis_'
  },
  {
    // <script mode="embed" isolate="true" themecolor="#2196f3" header="off" accentcolor="#000000" textcolor="white" id="webchat" src="https://cdn.machaao.com/prod/web/js/embed.js" type="text/javascript" mkey="YmM0ODlhYTAtYWVjMS0xMWVlLThjMWQtMjM2MzE0Nzc1MTZh" style="min-height: 480px" chathost="https://messengerx.io" botname="mx-tp-ai"> </script>
    id2: 2,
    mode: 'embed',
    isolate: 'true',
    themecolor: '#2196f3',
    header: 'off',
    id: 'webchat',
    accentcolor: '#000000',
    textcolor: 'white',
    src: 'https://cdn.machaao.com/prod/web/js/embed.js',
    type: 'text/javascript',
    mkey: 'YmM0ODlhYTAtYWVjMS0xMWVlLThjMWQtMjM2MzE0Nzc1MTZh',
    style: 'min-height: 500px',
    chathost: 'https://messengerx.io',
    botname: 'mx-tp-ai'
  }
  // Add other scripts as needed
];
const ChatPage = () => {
  const { profileName } = useParams();

  useEffect(() => {
    var id3 = 1;
    if (profileName == 'Taapsee Pannu') {
      id3 = 2;
    }
    else if (profileName == 'Urvashi Rautela') {
      id3 = 1;
    }
    const sc = scripts[id3 - 1];
    // const mkey = process.env[`REACT_APP_ELEMENT_${idFromParams}_MKEY`] || '';
    // const src = process.env[`REACT_APP_ELEMENT_${idFromParams}_SRC`] || '';
    // const keys=process.env.REACT_APP_API_KEY;
    // console.log("name from env is ",keys);
    const script = document.createElement("script");
    script.type = sc.type;
    script.src = sc.src;
    script.async = sc.async;
    script.setAttribute("mode", sc.mode);
    script.setAttribute("isolate", sc.isolate);
    script.setAttribute("themecolor", sc.themecolor);
    script.setAttribute("header", sc.header);
    script.setAttribute("accentcolor", sc.accentcolor);
    script.setAttribute("textcolor", sc.textcolor);
    script.setAttribute("id", sc.id);
    script.setAttribute(
      "mkey", sc.mkey
    );
    script.setAttribute("style", sc.style);
    script.setAttribute("chathost", sc.chathost);
    script.setAttribute("botname", sc.botname);

    document.getElementById("mcontext").appendChild(script);

    return () => {
      document.getElementById("mcontext").removeChild(script);
    };
  }, []);

  return (
    <>

      <section className="chatroom_area">
        {/* <SidePanel /> */}

        <div className="profile_header">

          <div className="rectangle-group" id="profileName">
            {/* <img className="rectangle-icon" alt="profile-pic" src={Tapsee} /> */}
            <div className="rectangle-icon" alt="profile-pic"> </div>
            <div className="taapsee-pannu-parent">
              <div className="taapsee-pannu">{profileName}</div>
              <div className="filmmaker-and-television2">
                filmmaker and television personality
              </div>
            </div>
          </div>

        </div>

        <div
          className="main_chatroom_section"
          id="mcontext"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </section>

    </>
  );
};

export default ChatPage;
