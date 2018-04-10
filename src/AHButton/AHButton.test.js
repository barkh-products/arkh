/* @flow */
import React from "react";
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";
import ReactTestUtils from 'react-dom/test-utils'; 
import styles from './AHButton.css';
import { AHButton } from "./AHButton";

describe("AHButton", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AHButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render children", () => {
    const tree = renderer.create(<AHButton ><div /></AHButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render loading", () => {
    const tree = renderer.create(<AHButton loading={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle disabled", () => {
    const tree = renderer.create(<AHButton disabled={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
