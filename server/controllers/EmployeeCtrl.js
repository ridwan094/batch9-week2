const update = async (req, res) => {
    const { id } = req.params;
    const employees = await req.context.models.Employees.update(
        { profile: req.fileName },
        { returning: true, where: { employee_id: parseInt(id) } }
    );
    return res.send(employees);
}

const create = async (req, res, next) => {
    const dataEmployee = req.dataEmployee;

    for (const data of dataEmployee) {
        await createEmpImages(req,res,data);        
    }
    next(); 
}

const createEmpImages = async (req, res, data) => {
    const{empId,empName,fileName,fileSize,fileType} = data;
    
    await req.context.models.EmployeesImages.create({
        emim_filename: fileName,
        emim_filesize: fileSize,
        emim_filetype: fileType,
        emim_employee_id: empId
    })
        .catch(err => console.log(err));
}


const findEmployeeImages = async (req, res) => {
    const result = await req.context.models.EmployeesImages.findAll();
    return res.send(result);
}

export default { update, create, findEmployeeImages }