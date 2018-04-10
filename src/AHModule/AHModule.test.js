/* @flow */
import React from "react";
import renderer from "react-test-renderer";
import { AHModule } from "./AHModule";

describe("AHModule", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AHModule />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should handle render method with loading false", () => {
    const tree = renderer.create(<AHModule loading={false} render={() => <div></div>} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle render method with loading true", () => {
    const tree = renderer.create(<AHModule loading={true} render={() => <div></div>} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle render method with error", () => {
    const tree = renderer.create(<AHModule loading={true} error={true} render={() => <div></div>} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
