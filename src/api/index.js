import request from '@/utils/request.js';

export const text = async () => {
  return await request({
    url: '/top/playlist/highquality'
  })
} 
