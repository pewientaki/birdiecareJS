import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { dataRequest } from '../../store/actions'

import { Event, PatientInfo, Header, HealthDetails, MedsDetails } from '../index';



interface AppProps {
  dataRequest(): {};
}

interface AppState {
  careRecipients: {};
}


const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: block;
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    this.props.dataRequest();
    console.log('i have mounted')

    // console.log(this.state.careRecipients)
  }
  public render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <HealthDetails />
          <MedsDetails />
          <Event />
          <PatientInfo />
        </AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => ({
  careRecipients: state.careRecipients,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  dataRequest: dataRequest(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);