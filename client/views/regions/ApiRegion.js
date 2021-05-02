import axios from 'axios';

const list = async () => {
    try {
        let response = await axios.get(`/api/regions`)
        return await response.data
    } catch (err) {
        return await err.message
    }


}


const create = async (region) => {
    await axios.post(`/api/regions`, region).then(response => { return response })
        .catch(error => { return error.message })
}

const findOne = async (data) => {
    const region_id = parseInt(data);
    try {
        let response = await axios.get(`/api/regions/${region_id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

const update = async (region) => {
    const region_id = parseInt(region.region_id);
    try {
        let response = await axios.put(`/api/regions/${region_id}`,
        region)
      return await response.data
    } catch(err) {
        return await err.message
    } 
  }

const remove = async (data) => {
    const region_id = parseInt(data);
    try {
        let response = await axios.delete(`/api/regions/${region_id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

export default { list, create,remove,findOne,update}