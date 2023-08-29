const controller = {}
const {name_models} = require('../models/model')


controller.servicios = (req, res) => {
    try {
        const servicio_id = req.params.servicio_id;
        name_models.findByPk(servicio_id)
            .then((result) => {
                if (result) {
                    // Si se encuentra el resultado, responde con un JSON
                    res.json(result);
                } else {
                    res.json({ message: 'No se encontró el servicio para la fecha proporcionada' });
                }
            })
            .catch((error) => {
                console.error('Error al obtener los datos de servicio ', error);
                res.status(500).json({ message: 'Error al obtener los datos de servicio' });
            });

    } catch (error) {
        console.error('Error en el servidor: ', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

controller.reservas = (res, req) => {
    try{
        const {
            nombre_cliente, 
            contacto, 
            servicio, 
            fecha, 
            horarios } = req.body
        name_models.create({
                
            })
                .then(() => {
                    res.json({ message: 'Reserva registrado exitosamente' });
                })
                .catch(error => {
                    console.error('Error al registrar Reserva:', error);
                    res.status(500).json({ message: 'Error al registrar Reserva' });
                });
    }catch (error){
        console.error('Error en el servido ', error)
        res.status(500).json({message: 'Error en el servidor'})
    }
}

module.exports = controller