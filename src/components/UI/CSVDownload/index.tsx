import React, { Component, createRef } from 'react';
import { CSVLink } from 'react-csv';
import PanelButton from '../PanelButton';
import axios from 'axios';
import { formDataRequestFormat } from '../../../utils';
import { Props, State } from './types';


class CSVDownloadComponent extends Component<Props, State> {
  private csvLink: any = createRef();
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
  }

  private transformRequestData = () => {
    let requestData = [...this.props.requestData];
    requestData.unshift('csv');
    requestData.push(true);
    return formDataRequestFormat(requestData, this.props.sessionId);
  }

  private fetchData = () => {
    this.setState({loading: true});
    const formData = this.transformRequestData();
    axios
      .post(this.props.path, formData)
      .then(response => {
        this.setState({ data: response.data, loading: false }, () => {
          this.csvLink.current.link.click();
        });
      });
  };
  public render() {
    return (
      <>
        <PanelButton
          title={this.props.title}
          icon={this.state.loading ? this.props.loadingIcon : this.props.icon }
          clickHandler={this.fetchData}
          active={false}
          type={'default'}
        />
        <CSVLink
          target='_self'
          ref={this.csvLink}
          filename={this.props.fileName}
          data={this.state.data}
        />
      </>
    );
  }
}
export default CSVDownloadComponent;
