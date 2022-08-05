const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_PAYREQ, HOSTNAME } = process.env;

const api = apiAdapter(URL_SERVICE_PAYREQ);

module.exports = async (req, res) => {
  try {
    const bucs = await api.get('/bucs', {
      params: {
        ...req.query,
      },
    });

    const bucsData = bucs.data;
    const firstPage = bucsData.data.first_page_url.split('?').pop();
    const lastPage = bucsData.data.last_page_url.split('?').pop();

    bucsData.data.first_page_url = `${HOSTNAME}/payreqs/bucs?${firstPage}`;
    bucsData.data.last_page_url = `${HOSTNAME}/payreqs/bucs?${lastPage}`;

    if (bucsData.data.next_page_url) {
      const nextPage = bucsData.data.next_page_url.split('?').pop();
      bucsData.data.next_page_url = `${HOSTNAME}/payreqs/bucs?${nextPage}`;
    }

    if (bucsData.data.prev_page_url) {
      const prevPage = bucsData.data.prev_page_url.split('?').pop();
      bucsData.data.prev_page_url = `${HOSTNAME}/payreqs/bucs?${prevPage}`;
    }

    bucsData.data.path = `${HOSTNAME}/payreqs/bucs`;

    return res.json(bucsData);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res
        .status(500)
        .json({ status: 'error', message: 'service unavailable' });
    }
    // const { data } = error.response;
    return res.status(404).json({ message: error.message });
  }
};
