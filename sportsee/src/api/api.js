import axios from 'axios';

async function resolve(promise) {
    const resolved = {
      data: null,
      error: null
    };
  
    try {
      resolved.data = await promise;
    } catch(e) {
      resolved.error = e;
    }
  
    return resolved;
}

export async function getUser(userId) {
  return await resolve(axios.get(`http://localhost:3000/user/${userId}`).then(res => res.data));
}

export async function getFirstName(userId) {
  return await resolve(axios.get(`http://localhost:3000/user/${userId}`).then(res => res.data.data.userInfos.firstName));
}

export async function getTodayScore(userId) {
  return await resolve(axios.get(`http://localhost:3000/user/${userId}`).then(res => res.data.data.todayScore));
}

export async function getKeyData(userId) {
  return await resolve(axios.get(`http://localhost:3000/user/${userId}`).then(res => res.data.data.keyData));
}

export async function getDailyActivity(userId) {
    return await resolve(axios.get(`http://localhost:3000/user/${userId}/activity`).then(res => res.data.data.sessions));
}

export async function getAverageSessions(userId) {
    return await resolve(axios.get(`http://localhost:3000/user/${userId}/average-sessions`).then(res => res.data.data.sessions));
}

export async function getPerformance(userId) {
    return await resolve(axios.get(`http://localhost:3000/user/${userId}/performance`).then(res => res.data.data));
}