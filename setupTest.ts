import Enzyme from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });
const mockNotification = function (title: any, options: any) {
  return {
    title,
    ...options,
  };
};
mockNotification["permission"] = "granted";
mockNotification["requestPermission"] = jest.fn().mockResolvedValue("granted");
window.Notification =
  window.Notification || (mockNotification as unknown as any);
