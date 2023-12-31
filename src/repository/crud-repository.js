class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const city = await this.model.create(data);
            return city;
        } catch (error) {
            console.log("Error occured in the repository layer");
            throw error;
        }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Error occured in the repository layer");
            throw error;
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repository")
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repository")
            throw error;
        }
    }

    async update(id, data) {
        try {
            console.log(data);
            const result = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repository")
            throw error;
        }
    }
}

module.exports = CrudRepository;