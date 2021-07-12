import http from "../http-common";

class UserDataService {
  getUser(id) {
    return http.get(`/user/${id}`);
  }

  getUserActivity(id) {
    return http.get(`/user/${id}/activity`);
  }

  getUserAverageSessions(id) {
    return http.get(`/user/${id}/average-sessions`);
  }

  getUserPerformance(id) {
    return http.get(`/user/${id}/performance`);
  }
}

export default new UserDataService();