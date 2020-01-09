import styled from 'styled-components';
import Inbox from '../../pages/inbox';

const InboxStyle = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
overflow-y: hidden;
.header {
  min-height: 4rem;
  display: none;
  @media only screen and (min-width: ${props => props.theme.tablet}){
    display: flex;
  }
  .site-name {
    display: none;
    align-items: center;
    padding-left: 1rem;
    flex: 0 0 ${props => props.theme.sidebarCollapsedWidth};
    @media only screen and (min-width: ${props => props.theme.desktop}){
      flex: 0 0 ${props => props.theme.sidebarFullWidth};
      display: flex;      
    }
    background-color: ${props => props.theme.secondary};    
    h1 {
      color: ${props => props.theme.white};      
      @media only screen and (min-width: ${props => props.theme.desktop}){
        margin-left: 0;
      }
    }
    .desktop {
      display: none;
      @media only screen and (min-width: ${props => props.theme.desktop}){
        display: block;
      }
    }
    .mobile {
      @media only screen and (min-width: ${props => props.theme.desktop}){
        display: none;
      }
    }
  }  
  .bar {
    flex: 1;
    background-color: ${props => props.theme.primary};
    border: 1px solid red;
    display: flex;    
    .left-content {
      padding-left: 1rem;
      display: flex;
      align-items: center;
      color: ${props => props.theme.white};
      .right {
        display: none;
      }      
    }
    .right-content {
      display: flex;  
      justify-content: center;
      @media only screen and (min-width: ${props => props.theme.desktop}){
        justify-content: flex-end;
      } 
      flex: 1;  
      .box {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        :hover {
          background-color: ${props => props.theme.secondary};
        }
        a {
          color: ${props => props.theme.white};      
          text-decoration: none;  
          display: flex;
          align-items: center;  
          span {
            background-color: ${props => props.theme.tertiary};
            padding: .5rem;
            border-radius: 50%;
            margin-left: .5rem;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
          }
          .icon {
            margin: 0 1.2rem;
          }
        }
      }
    }
  }
}
.content {
  display: grid;  
  width: 100%;
  grid-template-columns: 1fr;
  @media only screen and (min-width: ${props => props.theme.mobile}) {
    grid-template-columns: 35% 65%;
  }
  border: 1px solid black;
}
/* Inbox Select, for tablets and phones */
.inboxSelect {
  @media only screen and (min-width: ${props => props.theme.desktop}){
    display: none;
  }
  display: flex;
  flex-grow: 1;
  ul {
    width: 100%;
    display:grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-row: auto auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    list-style: none; 
    border-bottom: 1px solid grey;
    padding: 1rem 0;

  }
}  
.email-list {
  height: calc(100vh - 3rem);  
  margin-bottom: ${props => props.theme.bottomNavHeight};
  @media only screen and (min-width: ${props => props.theme.mobile}){
    margin-bottom: 0;
    height: calc(100vh - 3rem);
  }
	background: #f5f5f5;	
	max-height: 100%;
	overflow-y: auto;	
	&.empty {
		color: #aaa;
		padding-top: 200px;
		text-align: center;
  }

	.email-item {      
    overflow-y: hidden; 
    min-width: 0;
		background: #fff;
		border-bottom: 1px solid #eee;
		cursor: pointer;
    padding: 10px 15px;
		position: relative;
		&.selected {
			color: #009fc4;
		}
		
		.name {
      width: 100%;
      margin-bottom: 8px;
      padding-right: 1rem;
		}
		
		.details {
      overflow: hidden;
      min-width: 0;
      font-size: 12px;
			opacity: .5;
			text-transform: uppercase;
		}
		
		.unread-dot {
			height: 100%;
			right: 10px;
			position: absolute;
			top: 10px;
			
			&[data-read="false"]:before {
				background: #009fc4;
				border-radius: 50%;
				content: '';
				display: block;
				height: 6px;
				width: 6px;
			}
		}
		
		.time {
			float: right;
			text-align: right;
			width: 40%;
		}
		
		.message {
      display: block;
      min-width: 0;            
      white-space: nowrap;    
      overflow: hidden;
      text-overflow: ellipsis; 
		}
		
		:hover:not(.selected) {
			background: #fafafa;
		}
	}
}
.email-content {
 min-width: 100%;
 overflow-y: scroll;
 margin-bottom: ${props => props.theme.bottomNavHeight};
 @media only screen and (min-width: ${props => props.theme.mobile}){
    margin-bottom: 0;
    height: calc(100vh - 3rem);
  }
  &__header {
		background: #f5f5f5;
		border-bottom: 1px solid #eee;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
	}
	
	&__subject {
		font-size: 18px;
		margin: 10px 0;
	}

	&__details {
		font-size: 12px;
		opacity: .5;
		text-transform: uppercase;
	}

	&__time {
		color: #878787;
		float: right;
	}

	&__from {
		color: #878787;
	}
	
	&__message {
		padding: 20px 15px 15px;
	}
	
	.delete-btn {
		cursor: pointer;
		margin: -5px;
		padding: 5px;
		right: 20px;
		top: 24px;
		transition: color .1s linear;
		
		&:hover {
			color: #E23E57;
		}
	}
}
.main-content {
  display: flex;
}
/* Sidebar OLD */
.sidebar {
  display: none;  
  background: ${props => props.theme.darkGray};	
  @media only screen and (min-width: ${props => props.theme.desktop}){
      /*  sidebar becomes a bottom menu   */
    display: block;
    flex: 0 0 ${props => props.theme.sidebarFullWidth};
  }
  .sidebar__compose {
    border: 1px solid red;
    text-align: center;
    list-style: none;
    color: ${props => props.theme.white};
    padding: 1.5rem 0;
  }
	.sidebar__inboxes {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    list-style: none;  
    li {
      width: 100%;
      padding: 0 1rem; 
      margin-top: 1rem;
      a {
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        color: ${props => props.theme.white};
      }
    } 
		.item-count {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
			background: #000;
			border-radius: 50%;			
      width: 2rem;
      height: 2rem;   
      color: ${props => props.theme.white};
      text-align: center;
		}
	}
}
/* Bottom Nav doesn't display above desktop px */
.simple {
  display: none;
}
@media only screen and (max-width: ${props => props.theme.tablet}){
  .simple {
    position: fixed;
    display: flex;  
    flex: 1;
    bottom: 0;
    margin: 0;
    width: 100vw;
    z-index: 3;
    max-height: ${props => props.theme.bottomNavHeight};    
  }
  nav {
    background-color: ${props => props.theme.primary};
  }
  nav ul {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    list-style:none;
    margin:0;
    padding:0;
  }
  nav ul li {
    padding: 1rem;
  }
  nav ul li:hover {
    background-color: #1a2770;
  }
  nav ul a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }
  /** Menu simple **/
  .simple ul {
    display: flex;
    justify-content: space-around;
    justify-content: space-between;
  }
  .simple ul li{
    text-align:center;
    flex:1;
  }
}

`

export default InboxStyle;