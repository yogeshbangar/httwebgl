import React from "react";
import { shallow } from "enzyme";
import Blockchain from "./";

describe("Blockchain", () => {
  it("should render my close", () => {
    const wrapper = shallow(<Blockchain />);
    expect(wrapper.find(".close").length).toBe(1);
  });
});
