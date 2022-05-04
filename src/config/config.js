export const port = process.env.PORT;

const config = {
  port,
  jwt: {
    secretKey: 'edx',
    accessTime: '10h',
    refreshTime: '20h',
  },
};

export default config;
