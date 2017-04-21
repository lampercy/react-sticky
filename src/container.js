import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Channel from './channel';

export default class Container extends React.Component {

  static contextTypes = {
    'sticky-channel': PropTypes.any,
  }

  static childContextTypes = {
    'sticky-channel': PropTypes.any,
  }

  static defaultProps = {
    channelName: 'default'
  }

  constructor(props) {
    super(props);
    this.channel = new Channel({ inherited: 0, offset: 0, node: null }, props.channelName);
  }

  getChildContext() {
    return { 'sticky-channel': this.channel };
  }

  componentWillMount() {
    const parentChannel = this.context['sticky-channel'];
    if (parentChannel) parentChannel.subscribe(this.updateOffset, this.props.channelName);
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    this.channel.update((data) => { data.node = node }, this.props.channelName);
  }

  componentWillUnmount() {
    this.channel.update((data) => { data.node = null }, this.props.channelName);

    const parentChannel = this.context['sticky-channel'];
    if (parentChannel) parentChannel.unsubscribe(this.updateOffset, this.props.channelName);
  }

  updateOffset = ({ inherited, offset }) => {
    this.channel.update((data) => { data.inherited = inherited + offset }, this.props.channelName);
  }

  render() {
    const {
      channelName,
      ...props
    } = this.props;
    return <div {...props}>
      {this.props.children}
    </div>
  }
}
