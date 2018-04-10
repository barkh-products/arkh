import React, { Component } from "react";
import LogRocket from "logrocket";
import styled from "styled-components";
import { Emojione } from "react-emoji-render";
import { AHTitle } from "../AHTitle/AHTitle";
import { AHButton } from "../AHButton/AHButton";
import { AHSeparator } from "../AHSeparator/AHSeparator";
import { AHInput, AHTextArea } from "../AHInput/AHInput";
import { feedbackMutation } from "./feedbackMutation";
import { shouldUpdate } from "recompose";
const Buttons = styled.div`
display: flex;
`;

const Greeting = styled.div`
margin: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const FeedbackWrapper = styled.div`
color: ${props => props.theme.darkText};
padding: 5px;
font-size: 12px;
`;

const Greeters = [
    {
      name: "Fabian",
      message: `Tjena! :wave:
Här kan ni enkelt nå oss med frågor, idéer eller rapportera problem.
Tveka inte att höra av er!`
    },
    {
      name: "Jonathan",
      message: `Hallå där! :wave:
Här kan ni enkelt nå oss med frågor, idéer eller rapportera problem.
Tveka inte att höra av er!`
    }
  ];
  const currentGreeter = Greeters[Math.round(Math.random())];
  const Greet = () => {
    return (
      <div>
        <Greeting>
          <img
            src={require("./" + currentGreeter.name + "Mini.png")}
            style={{ width: 50, height: 50, borderRadius: 25 }}
            alt={currentGreeter.name}
          />
          <label>
            <b>{currentGreeter.name}</b>{" "}
            <b style={{ color: "#aaa" }}>från Basekamp</b>
          </label>
        </Greeting>
  
        <div style={{ marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
          <Emojione
            svg
            style={{ whiteSpace: "pre-wrap", fontWeight: "normal" }}
            text={currentGreeter.message}
          />
        </div>
      </div>
    );
  };
  const NoUpdatingGreet = shouldUpdate(() => false)(Greet);
  class FeedbackComp extends Component {
    setContactInfo = ({ target }) =>
      this.setState({ contactInfo: target ? target.value : "" });
    setName = ({ target }) => this.setState({ name: target ? target.value : "" });
    setMessage = ({ target }) =>
      this.setState({ message: target ? target.value : "" });
  
    submit = () => {
      this.setState({ isLoading: true });
      this.props
        .mutate({
          variables: {
            contactInfo: this.state.contactInfo,
            subject: " TO: " + currentGreeter.name + " FROM: " + this.state.name,
            message: LogRocket.sessionURL + " " + this.state.message
          }
        })
        .then(() => {
          this.setState({
            name: "",
            contactInfo: "",
            message: "",
            isLoading: false
          });
          if (this.props.onSent) {
            this.props.onSent();
          }
        });
    };
    state = {
      name: "",
      contactInfo: "",
      message: "",
      isLoading: false
    };
  
    render() {
      return (
        <FeedbackWrapper>
          <NoUpdatingGreet />
          <Buttons />
          <AHTitle style={{ marginTop: 10 }} type="SUB">
            Kontakta oss!
          </AHTitle>
          <AHSeparator style={{ margin: 20 }} />
  
          <AHInput
            value={this.state.name}
            onChange={this.setName}
            placeholder="Namn"
            style={{ fontSize: 13 }}
          />
          <AHInput
            value={this.state.contactInfo}
            onChange={this.setContactInfo}
            placeholder="Din email eller Tel.nr"
            style={{ fontSize: 13 }}
          />
          <AHTextArea
            value={this.state.message}
            onChange={this.setMessage}
            placeholder="Ditt meddelande, tack!"
            style={{ fontSize: 13, height: 170 }}
          />
          <Buttons>
            <AHButton
              onClick={this.props.onCancel}
              style={{
                width: "50%",
                marginTop: 5,
                marginRight: 5,
                marginBottom: "5%"
              }}
            >
              AVBRYT
            </AHButton>
            <AHButton
              loading={this.state.isLoading}
              onClick={this.submit}
              style={{
                width: "50%",
                marginTop: 5,
                marginLeft: 5,
                marginBottom: "5%"
              }}
            >
              SKICKA
            </AHButton>
          </Buttons>
        </FeedbackWrapper>
      );
    }
  }
  
  export const Feedback = feedbackMutation(FeedbackComp);