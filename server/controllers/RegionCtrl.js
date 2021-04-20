import { sequelize } from '../../config/config-db';

//findAll = select * from regions
const findAll = async (req, res) => {
    const regions = await req.context.models.Regions.findAll();
    return res.send(regions);
}
//find region by id
const findOne = async (req, res) => {
    const regions = await req.context.models.Regions.findOne({
        where: {region_id: req.params.id}
    });
    return res.send(regions);
}

// create new region
const create = async (req, res) => {
    const regions = await req.context.models.Regions.create({
        region_id: null,
        region_name: req.body.region_name
    });
    return res.send(regions);
}

// update
const update = async (req, res) => {
    const { region_name } = req.body;
    const regions = await req.context.models.Regions.update(
        { region_name: region_name}, //nama attribute yang akan di update
        { returning: true, where: { region_id: req.params.id }}
    );
    return res.send(regions);
}

// delete
const remove = async (req, res) => {
    const regions = await req.context.models.Regions.destroy({
        where: {region_id: req.params.id}
    });
    return res.send(true);
}

// 
const rawSQL = async(req, res) => {
    const regions = await sequelize.query('SELECT * FROM regions where region_id = :regionId',
    { replacements: { regionId: parseInt(req.params.id)}, type: sequelize.QueryTypes.SELECT}).then(result => {
        return res.send(result);
    })
}

export default {
    findAll,
    findOne,
    create,
    update,
    remove,
    rawSQL
}