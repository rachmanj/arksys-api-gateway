const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_PAYREQ } = process.env;

const api = apiAdapter(URL_SERVICE_PAYREQ);

module.exports = async (req, res) => {
  try {
    const bucs = await api.get('/bucs');
    return res.json(bucs.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res
        .status(500)
        .json({ status: 'error', message: 'service unavailable' });
    }
    // const { data } = error.response;
    return res.status(404).json({ message: 'service unavailable' });
  }
};
