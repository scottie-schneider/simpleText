// useEffect is the hook version of ComponentDidMount, which we're using to register our service worker.
// https://medium.com/@felippenardi/how-to-do-componentdidmount-with-react-hooks-553ba39d1571 
import React, { useState, useEffect } from "react";
import InboxStyle from '../components/styles/InboxStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCommentAlt, faBell, faPencil, faInbox, faPaperPlane, faPencilRuler, faTrash } from '@fortawesome/pro-solid-svg-icons'
require('isomorphic-fetch');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// Helper methods
const getPrettyDate = (date) => {
	date = date.split(' ')[0];
	const newDate = date.split('-');
	const month = months[0];
	return `${month} ${newDate[2]}, ${newDate[0]}`;
}

// Remove the seconds from the time
const getPrettyTime = (date) => {
	const time = date.split(' ')[1].split(':');
	return `${time[0]}:${time[1]}`;
}


const Inbox = ({ conversations }) => {
  const [currentConversation, setCurrentconversation] = useState(conversations[0])
  const [sideBarSection, setSidebarSection] = useState('inbox');
  const [unreadCount, setUnreadCount] = useState(
    conversations.reduce(
      function(previous, msg) {
        if (msg.read !== "true" ) {
          return previous + 1;
        }
        else {
          return previous;
        }
      }, 0)
  )
  const [deletedCount, setDeletedCount] = useState(
    conversations.reduce(
      function(previous, msg) {
        if (msg.tag === "deleted") {
          return previous + 1;
        }
        else {
          return previous;
        }
      }, 0)
  )
  const getDisplayDate = (convo) => {
    return `${getPrettyDate(convo.time)} · ${getPrettyTime(convo.time)}`;
  }

  return (
    <InboxStyle>      
      {/* Main Bar/Nav Bar */}
      <header class="header">
        <div class="site-name">
            <h1 class="desktop">SimpleText</h1>
        </div>
        <div class="bar">
          <div className="inboxSelect">
            <ul>
              <li onClick={() => { setSidebarSection('inbox'); }}>
                <a>                  
                  <p>Inbox</p>                  
                </a>
              </li>
              <li onClick={() => { setSidebarSection('sent'); }}>
                <a>              
                  <p>Sent</p>            
                </a>
              </li>
              <li onClick={() => { setSidebarSection('drafts'); }}>
                <a>                
                  <p>Drafts</p>
                </a>
              </li>
              <li onClick={() => { setSidebarSection('deleted'); }}>
                <a>                
                  <p>Trash</p>                
                </a>
              </li>
            </ul>
          </div>
          <div class="right-content">
              <div class="messages box">
                      <a href="#">
                        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                          Messages
                          <span>20</span>
                      </a>
              </div>  
              <div class="messages box">
                      <a href="#">
                        <FontAwesomeIcon className="icon" icon={faBell} />
                          Alerts
                          <span>10</span>
                      </a>
              </div>  
              <div class="sign-off box" >
                  <a href="#">Sign Out</a>
              </div>
          </div>
        </div>
      </header>
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar__compose">
            <li onClick={() => { setSidebarSection('inbox'); }}>
              <a>                
                <p>Compose</p>                
              </a>
            </li>
          </div>
          <ul className="sidebar__inboxes">
            <li onClick={() => { setSidebarSection('inbox'); }}>
              <a>
                <FontAwesomeIcon className="icon" icon={faInbox} />
                <p>Inbox</p>
                <span className="item-count">{unreadCount}</span>
              </a>
            </li>
            <li onClick={() => { setSidebarSection('sent'); }}><a>
              <FontAwesomeIcon className="icon" icon={faPaperPlane} /> 
              Sent
              <span className="item-count">0</span></a></li>
            <li onClick={() => { setSidebarSection('drafts'); }}><a>
              <FontAwesomeIcon className="icon" icon={faPencilRuler} />
              Drafts
              <span className="item-count">0</span>
              </a></li>
            <li onClick={() => { setSidebarSection('deleted'); }}><a>
              <FontAwesomeIcon className="icon" icon={faTrash} />
              Trash
              <span className="item-count">{deletedCount}</span>
              </a></li>
          </ul>
        </div> 
        {/* End .sidebar */}
        <div className="content">
          {/* Tablet and Phone Inbox Selectors */}

          {/* EMAIL LIST COMPONENT */}
          <div className="email-list">
            {
              conversations.map(conversation => {
                return ( 
                  <div 
                    onClick={() => { 
                      console.log('set the clicked email in state and change to read')
                      setCurrentconversation(conversation)
                    }} 
                    className={conversation !== currentConversation ? "email-item" : "selected"}
                  >
                    {/* <div className="email-item__unread-dot" data-read={conversation.read}></div> */}
                    <div className="email-item__subject truncate">{conversation.subject}</div>
                    <div className="email-item__details">
                      <span className="email-item__from truncate">{conversation.from}</span>
                      <span className="email-item__time truncate">{getPrettyDate(conversation.time)}</span>
                    </div>
                  </div>
                );
              })
            }
          </div>
          {/* EMAIL DETAILS COMPONENT */}
          <div className="email-content">
          <div className="email-content__header">
            <h3 className="email-content__subject">{currentConversation.subject}</h3>
            {currentConversation.tag !== 'deleted' ? "delete button here" : null}
            <div className="email-content__time">{getDisplayDate(currentConversation)}</div>
            <div className="email-content__from">{currentConversation.from}</div>
          </div>
          <div className="email-content__message">{currentConversation.message}</div>
        </div>
        </div>          
        {/* Bottom Nav */}
        <nav class="simple">
          <ul>
            <li><a href="#">Inbox</a></li>
            <li><a href="#">Campaigns</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Sign out</a></li>
          </ul>
        </nav>
        {/* End .main-content */}        
      </div>
    </InboxStyle>
  )
}

Inbox.getInitialProps = async function({req, res, query: { userId }}) {
  // getting the emails
  let conversations;
  try {        
    console.log('before fetch')
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // dev code
      conversations = await fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/311743/dummy-emails.json')  
    } else {
      // production code
      conversations = await fetch(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/311743/dummy-emails.json`)  
    } 
    conversations = await conversations.json();
  } catch(e){
    console.log(e)
    conversations = undefined
  }
  return { conversations };
};

export default Inbox;


