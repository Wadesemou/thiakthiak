import React, { Component} from 'react'
// import BannerAnim, { Element, BgElement } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
// import Button from 'antd/lib/button';
import './contact.css'
import QueueAnim from 'rc-queue-anim';
import RcQueueAnim from 'rc-queue-anim';

class Contact extends React.Component{
  state = {
    show: true
  };
  onClick  = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="queue-demo">
        <div className="buttons"  >
          <button type="primary" onClick={this.onClick} >Switch</button>
        </div>
        <RcQueueAnim type="scaleX" ease="easeInCubic" delay = "5" >
          
          {this.state.show ? [
            <div id="cool"key="a"><h1>titr</h1>
              <ul>
                <li>cooooooooooooooooooooooool</li>
                <li />
                <li />
              </ul>
            </div>,
            <div id="cool"className="demo-tbody" key="b">
              <ul >
                <li>cool</li>
                <li>copy cole cdnje louc antin </li>
                <li>yes this cool possible react </li>
              </ul>
            </div>
          ] : <div id="coo" c key="a"><h1>titrreeeeeeeeeeeeeè</h1>
              <ul>
                <li>cooooooooooooooooooooooool</li>
                <li />
                <li />
              </ul>
            </div>}
        </RcQueueAnim >
      </div>
    );
  }
};

export default Contact ;