import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
const mockNotification = function (title, options) {
  return {
    title,
    ...options
  };
};
mockNotification['permission'] = 'granted';
mockNotification['requestPermission'] = jest.fn().mockResolvedValue('granted');
window.Notification = window.Notification || mockNotification as unknown as any;