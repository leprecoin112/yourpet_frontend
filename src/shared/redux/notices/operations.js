import axios from 'axios';

export const fetchNoticeById = async noticeId => {
    const {data} = await axios.get(`/api/notices/${noticeId}`);
  return data;
};
