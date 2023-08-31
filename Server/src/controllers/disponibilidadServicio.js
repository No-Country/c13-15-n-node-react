const HorariosModel = require("../models/horarioModel");
const Servicio = require('../models/servicioModel')
const HorarioServicioModel = require("../models/horarioServicioModel");


//tengo que pasar como clase

const dispServicio =  async (req, res) => {
    const servicio = req.query.servicio;
    const fecha = req.query.fecha

    if (!servicio || !fecha) {
        return res.status(400).json({ error: 'Faltan parámetros requeridos' });
        }
    
    try {
        //me devuelve la fecha
        const servicioHorarios = await Servicio.findOne({
            where: { nombre: servicio },
                include: {
                    model: HorariosModel,
                    where: { fecha },
            },
        });

        //me devuelve horario
        const horariosDisponibles = await HorariosModel.findAll({
            include: [
                {
                    model: HorarioServicioModel,
                    where: {
                        available: true
                    }
                }
                ],
                where: {
                    schedule: fecha
                }
        });

        await Promise.all([servicioHorarios, horariosDisponibles])
    
        if (!servicioHorarios || horariosDisponibles.length === 0) {
            return res.status(404).json({ mensaje: 'El servicio solicitado no se encuentra registrado' });
        }
    
        return res.json({servicioHorarios, horariosDisponibles});
    } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
};

module.exports = dispServicio