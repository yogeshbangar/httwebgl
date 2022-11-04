import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import UI from ".";
import * as redux from "../hooks";
import { loadingGif } from "../Assets";
import About from "./About";
import PopupPage from "./PopupPage";
import Blockchain from "./Blockchain";

describe("UI", () => {
  let wrapper: ShallowWrapper;
  jest.spyOn(redux, "useIsAllModelLoadedState").mockImplementation(() => true);
  beforeEach(() => {
    wrapper = shallow(<UI />);
  });
  it("should render gif animation", () => {
    const img = wrapper.find(".gif-animation");
    expect(img.length).toBe(1);
    expect(img.at(0).prop("src")).toEqual(loadingGif);
  });
  it("should render about component", () => {
    expect(wrapper.find(About).length).toBe(0);
    const aboutButton = wrapper.find("#about-button");
    expect(aboutButton.length).toBe(1);
    aboutButton.simulate("click");
    expect(wrapper.find(About).length).toBe(1);
  });
  it("should render game icon", () => {
    expect(wrapper.find(".footer").length).toBe(0);
    const projectsButton = wrapper.find("#projects-button");
    expect(projectsButton.length).toBe(1);
    projectsButton.simulate("click");
    expect(wrapper.find(".footer").length).toBe(1);
    const gameButton = wrapper.find(".img-game").at(0);
    gameButton.simulate("click");
    expect(wrapper.find(PopupPage).length).toBe(1);
  });
  it("should render Blockchain popup", () => {
    expect(wrapper.find(Blockchain).length).toBe(0);
    const projectsButton = wrapper.find("#crypto-button");
    expect(projectsButton.length).toBe(1);
    projectsButton.simulate("click");
    expect(wrapper.find(Blockchain).length).toBe(1);
  });
});
