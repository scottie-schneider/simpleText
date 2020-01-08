import styled from 'styled-components';
import Inbox from '../../pages/inbox';

const InboxStyle = styled.div`
display: flex;
flex-direction: column;
min-height: 100%;
.header {
  min-height: 4rem;
  display: flex;
  .site-name {
    display: flex;
    align-items: center;
    flex: 0 0 5rem;
    @media only screen and (min-width: 1200px){
      flex: 0 0 20rem;
    }
    background-color: ${props => props.theme.secondary};
    padding-left: 1rem;
    h1 {
      color: ${props => props.theme.white};
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
    display: flex;
    justify-content: space-between;
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
          }
        }
      }
    }
  }
}
.sidebar {
	background: ${props => props.theme.darkGray};
	float: left;
	height: 500px;
	width: 200px;
	.sidebar__inboxes {
		margin-top: 50px;
		.item-count {
			background: #34393d;
			border-radius: 5px;
			float: right;
			padding: 2px 8px;
			margin: -2px -8px;
		}
		
		li a {
			color: #fff;
			cursor: pointer;
			display: block;
			margin-bottom: 10px;
			padding: 15px;
			text-decoration: none;	
			width: 100%;
			
			:hover {
				background: #404549;
			}
		}
		
		.fa {
			margin-right: 10px;
		}
	}
	
	.btn.compose {
		color: #fff;
		padding: 30px 15px;
		text-align: center;
		text-decoration: none;
		transition: all .1s linear;
		width: 100%;
		
		&:hover {
			background-size: 150%;
			
			.fa {
				-webkit-transform: rotate(90deg);
				-ms-transform: rotate(90deg);
				transform: rotate(90deg);
			}
		}		
		.fa {
			margin-left: 10px;
			transition: all .1s linear;
		}
	}
}
.email-list {
	background: #f5f5f5;
	float: left;
	height: 500px;
	max-height: 100%;
	overflow-y: auto;
	width: 35%;
	
	&.empty {
		color: #aaa;
		padding-top: 200px;
		text-align: center;
	}
	
	.email-item {
		background: #fff;
		border-bottom: 1px solid #eee;
		cursor: pointer;
		padding: 10px 15px;
		position: relative;
		
		&.selected {
			color: #009fc4;
		}
		
		&__subject {
			margin-bottom: 8px;
		}
		
		&__details {
			font-size: 12px;
			opacity: .5;
			text-transform: uppercase;
		}
		
		&__unread-dot {
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
		
		&__time {
			float: right;
			text-align: right;
			width: 40%;
		}
		
		&__from.truncate {
			width: 60%;
		}
		
		&:hover:not(.selected) {
			background: #fafafa;
		}
	}
}
`

export default InboxStyle;