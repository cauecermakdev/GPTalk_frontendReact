import api from './api';

export async function getActivitiesByDate(token, date) {
  const response = await api.get(`/activities/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);

  return response.data;
}
