import '@testing-library/jest-dom';

const mockNotification = function (title, options) {
  return {
    title,
    ...options
  };
};
mockNotification['permission'] = 'granted';
mockNotification['requestPermission'] = jest.fn().mockResolvedValue('granted');
window.Notification = window.Notification || mockNotification as unknown as any;
