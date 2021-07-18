import http from "../http-common";

/**
 * Service that uses the axios object to send HTTP requests or make API calls.
 */
class UserDataService {
  /**
 * Returns the promise of API-GET call for User
 * @param   {number} id     Id of the User
 * @return  {Promise}       User from the API
 */
  getUser(id) {
    return http.get(`/user/${id}`);
  }

  /**
 * Returns the promise of API-GET call for User's activity
 * @param   {number} id     Id of the User
 * @return  {Promise}       UserActivity from the API
 */
  getUserActivity(id) {
    return http.get(`/user/${id}/activity`);
  }

  /**
 * Returns the promise of API-GET call for User's average-sessions
 * @param   {number} id     Id of the User
 * @return  {Promise}       UserSessions from the API
 */
  getUserAverageSessions(id) {
    return http.get(`/user/${id}/average-sessions`);
  }

  /**
 * Returns the promise of API-GET call for User's performances
 * @param   {number} id     Id of the User
 * @return  {Promise}       UserPerformances from the API
 */
  getUserPerformance(id) {
    return http.get(`/user/${id}/performance`);
  }
}

export default new UserDataService();